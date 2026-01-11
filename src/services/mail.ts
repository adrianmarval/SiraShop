import { Resend } from "resend";
import { render } from "@react-email/render";
import { getTranslations } from "next-intl/server";
import { OrderConfirmationEmail } from "@/components/email/order-confirmation";
import PaidOrderEmail from "@/components/email/paid-order";
import InvoiceEmail from "@/components/email/invoice-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const verifyEmailLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify?token=${token}`;

  await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: "[Next Dashboard] Action required: Verify your email",
    html: `<p>Click <a href="${verifyEmailLink}">Here</a> to verify your email.</p>`,
  });
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetPasswordLink = `${process.env.NEXT_PUBLIC_APP_URL}/new-password?token=${token}`;

  await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: "[Next Dashboard] Action required: Reset your password",
    html: `<p>Click <a href="${resetPasswordLink}">Here</a> to reset your password.</p>`,
  });
};

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: "[Next Dashboard] Action required: Confirm Two-Factor Authentication",
    html: `<p>${token} is your authentication Code.</p>`,
  });
};

export const sentOrderConfirmationEmail = async (
  email: string,
  orderId: string,
  total: number,
  products: { title: string; price: number; quantity: number; size: string; image: string }[],
  locale: "es" | "en" = "es",
) => {
  const tTemplate = await getTranslations({ locale, namespace: "OrderConfirmationEmail" });
  const translations = {
    subject: tTemplate("subject"),
    title: tTemplate("title"),
    message: tTemplate("message"),
    received: tTemplate("received"),
    quantity: tTemplate("quantity"),
    total: tTemplate("total"),
    policyTitle: tTemplate("policyTitle"),
    policyText: tTemplate("policyText"),
    footer: tTemplate("footer"),
  };

  const emailHtml = await render(
    OrderConfirmationEmail({
      orderId: orderId,
      total: total,
      products: products,
      locale: locale,
      translations: translations,
    }),
  );
  const t = await getTranslations({ locale, namespace: "Email" });
  await resend.emails.send({
    from: "Crowdfast Store <crowdfaststore@giftcardshop.app>",
    to: email,
    subject: t("orderConfirmationSubject", { orderId: orderId.split("-")[0] }),
    html: emailHtml,
  });
};

export const sentPaymentConfirmationEmail = async (
  email: string,
  orderId: string,
  total: number,
  products: { title: string; price: number; quantity: number; size: string; image: string }[],
  locale: "es" | "en" = "es",
) => {
  const tTemplate = await getTranslations({ locale, namespace: "PaidOrderEmail" });
  const translations = {
    subject: tTemplate("subject"),
    title: tTemplate("title"),
    text: tTemplate("text"),
    processing: tTemplate("processing"),
    quantity: tTemplate("quantity"),
    totalPaid: tTemplate("totalPaid"),
    footer: tTemplate("footer"),
  };

  const emailHtml = await render(
    PaidOrderEmail({
      orderId: orderId,
      total: total,
      products: products,
      locale: locale,
      translations: translations,
    }),
  );

  const t = await getTranslations({ locale, namespace: "Email" });
  await resend.emails.send({
    from: "Crowdfast Store <crowdfaststore@giftcardshop.app>",
    to: email,
    subject: t("paymentReceiptSubject", { orderId: orderId.split("-")[0] }),
    html: emailHtml,
  });
};

export const sendInvoiceEmail = async (
  email: string,
  order: {
    id: string;
    createdAt: Date;
    total: number;
    subTotal: number;
    tax: number;
  },
  billingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
  },
  products: {
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[],
  invoiceId: number,
  locale: "es" | "en" = "es",
) => {
  const emailHtml = await render(
    InvoiceEmail({
      orderId: order.id,
      invoiceId: invoiceId,
      locale: locale,
      orderDate: order.createdAt,
      billingAddress: billingAddress,
      products: products,
      subTotal: order.subTotal,
      tax: order.tax,
      total: order.total,
    }),
  );

  const t = await getTranslations({ locale, namespace: "Email" });
  await resend.emails.send({
    from: "Crowdfast Store <crowdfaststore@giftcardshop.app>",
    to: email,
    subject: t("invoiceSubject", { orderId: order.id.split("-")[0] }),
    html: emailHtml,
  });
};
