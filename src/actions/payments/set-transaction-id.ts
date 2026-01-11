"use server";

import prisma from "@/lib/prisma";

import { getTranslations } from "next-intl/server";

export const setTransactionId = async (orderId: string, transactionId: string) => {
  const t = await getTranslations("ServerActions");
  try {
    const order = await prisma.order.update({
      where: { id: orderId },
      data: { transactionId: transactionId },
    });

    if (!order) {
      return {
        ok: false,
        message: t("orderNotFound", { id: orderId }),
      };
    }

    return { ok: true };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: t("transactionUpdateError"),
    };
  }
};
