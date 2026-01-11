import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  isPaid: boolean;
}

import { useTranslations } from "next-intl";

export const OrderStatus = ({ isPaid }: Props) => {
  const t = useTranslations("OrderStatus");
  return (
    <div
      className={clsx("mb-5 flex items-center rounded-lg px-3.5 py-2 text-xs font-bold text-white", {
        "bg-red-500": !isPaid,
        "bg-green-700": isPaid,
      })}
    >
      <IoCardOutline size={30} />
      {/* <span className="mx-2">Pendiente de pago</span> */}
      <span className="mx-2">{isPaid ? t("paid") : t("pending")}</span>
    </div>
  );
};
