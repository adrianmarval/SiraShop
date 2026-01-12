"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { CreateOrderData, CreateOrderActions, OnApproveActions, OnApproveData } from "@paypal/paypal-js";
import { paypalCheckPayment, setTransactionId } from "@/actions";
import { useParams } from "next/navigation";

interface Props {
  orderId: string;
  amount: number;
}

export const PayPalButton = ({ orderId, amount }: Props) => {
  const [{ isPending }] = usePayPalScriptReducer();
  const params = useParams();
  const locale = (params?.locale as "es" | "en") || "es";

  const rountedAmount = Math.round(amount * 100) / 100; //123.23

  if (isPending) {
    return (
      <div className="mb-16 animate-pulse">
        <div className="h-11 rounded bg-gray-300" />
        <div className="mt-2 h-11 rounded bg-gray-300" />
      </div>
    );
  }

  const createOrder = async (data: CreateOrderData, actions: CreateOrderActions): Promise<string> => {
    const transactionId = await actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            value: `${rountedAmount}`,
            currency_code: "USD",
          },
        },
      ],
    });

    const { ok, message } = await setTransactionId(orderId, transactionId);
    if (!ok) {
      throw new Error(message);
    }

    return transactionId;
  };

  const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
    const details = await actions.order?.capture();
    if (!details) return;

    await paypalCheckPayment(details.id!, locale);
  };

  return (
    <div className="relative z-0">
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </div>
  );
};
