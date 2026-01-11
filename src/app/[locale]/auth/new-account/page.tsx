import { titleFont } from "@/config/fonts";
import { RegisterForm } from "./ui/RegisterForm";

import { getTranslations } from "next-intl/server";

export default async function NewAccountPage() {
  const t = await getTranslations("Auth");

  return (
    <div className="flex min-h-screen flex-col pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} mb-5 text-4xl`}>{t("newAccount")}</h1>

      <RegisterForm />
    </div>
  );
}
