"use server";
import prisma from "@/lib/prisma";
import { TAX_RATE } from "@/config/constants";

import { auth } from "@/auth.config";
import type { Address, Size } from "@/interfaces";
import { sentOrderConfirmationEmail } from "@/services/mail";

interface ProductToOrder {
  productId: string;
  quantity: number;
  size: Size;
}

import { getTranslations } from "next-intl/server";

export const placeOrder = async (productIds: ProductToOrder[], address: Address, locale: "es" | "en" = "es") => {
  const t = await getTranslations({ locale, namespace: "ServerActions" });
  const session = await auth();

  const userId = session?.user.id;

  // Verificar sesión de usuario
  if (!userId) {
    return {
      ok: false,
      message: t("noSession"),
    };
  }

  // Obtener la información de los productos
  // Nota: recuerden que podemos llevar 2+ productos con el mismo ID
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds.map((p) => p.productId),
      },
    },
    include: {
      ProductImage: {
        take: 1,
      },
    },
  });

  // Calcular los montos // Encabezado
  const itemsInOrder = productIds.reduce((count, p) => count + p.quantity, 0);

  // Los totales de tax, subtotal, y total
  const { subTotal, tax, total } = productIds.reduce(
    (totals, item) => {
      const productQuantity = item.quantity;
      const product = products.find((product) => product.id === item.productId);

      if (!product) throw new Error(t("productNotExist", { id: item.productId }));

      const subTotal = product.price * productQuantity;

      totals.subTotal += subTotal;
      totals.tax += subTotal * TAX_RATE;
      totals.total += subTotal * (1 + TAX_RATE);

      return totals;
    },
    { subTotal: 0, tax: 0, total: 0 },
  );

  // Crear la transacción de base de datos
  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      // 1. Actualizar el stock de los productos
      const updatedProductsPromises = products.map((product) => {
        //  Acumular los valores
        const productQuantity = productIds.filter((p) => p.productId === product.id).reduce((acc, item) => item.quantity + acc, 0);

        if (productQuantity === 0) {
          throw new Error(t("noQuantity", { id: product.id }));
        }

        return tx.product.update({
          where: { id: product.id },
          data: {
            // inStock: product.inStock - productQuantity // no hacer
            inStock: {
              decrement: productQuantity,
            },
          },
        });
      });

      const updatedProducts = await Promise.all(updatedProductsPromises);

      // Verificar valores negativos en las existencia = no hay stock
      updatedProducts.forEach((product) => {
        if (product.inStock < 0) {
          throw new Error(t("insufficientInventory", { title: product.title }));
        }
      });

      // 2. Crear la orden - Encabezado - Detalles
      const order = await tx.order.create({
        data: {
          userId: userId,
          itemsInOrder: itemsInOrder,
          subTotal: subTotal,
          tax: tax,
          taxRate: TAX_RATE,
          total: total,

          OrderItem: {
            createMany: {
              data: productIds.map((p) => ({
                quantity: p.quantity,
                size: p.size,
                productId: p.productId,
                price: products.find((product) => product.id === p.productId)?.price ?? 0,
              })),
            },
          },
        },
      });

      // Validar, si el price es cero, entonces, lanzar un error

      // 3. Crear la direccion de la orden
      // Address
      const { country, ...restAddress } = address;
      const orderAddress = await tx.orderAddress.create({
        data: {
          ...restAddress,
          countryId: country,
          orderId: order.id,
        },
      });

      return {
        updatedProducts: updatedProducts,
        order: order,
        orderAddress: orderAddress,
      };
    });

    // Enviar correo de confirmación
    try {
      const { order, updatedProducts, orderAddress } = prismaTx;
      const userEmail = session.user.email;

      if (userEmail) {
        const emailProducts = productIds.map((p) => {
          const product = updatedProducts.find((prod) => prod.id === p.productId);
          // Assuming the first image is the one we want or fallback
          // Since we updated the stock, the product object is from the update result which usually doesn't return relations unless included.
          // Wait, the transaction returns 'updatedProducts'.
          // 'updatedProducts' is the result of 'tx.product.update'. Does it return ProductImage?
          // Prisma update does NOT return relations by default unless using 'include'.
          // But 'products' (the initial query) DOES have it if I add include there.

          const originalProduct = products.find((prod) => prod.id === p.productId);
          const image = originalProduct?.ProductImage[0]?.url;

          return {
            title: originalProduct?.title ?? "",
            price: originalProduct?.price ?? 0,
            quantity: p.quantity,
            size: p.size,
            image: image
              ? image.startsWith("http")
                ? image
                : `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/products/${image}`
              : "",
          };
        });

        await sentOrderConfirmationEmail(userEmail, order.id, order.total, emailProducts, locale);
      }
    } catch (error) {
      console.log("Error sending email:", error);
      // We don't want to fail the order if email fails
    }

    return {
      ok: true,
      order: prismaTx.order,
      prismaTx: prismaTx,
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error?.message,
    };
  }
};
