import { titleFont } from "@/config/fonts";
import { LoginForm } from "./ui/LoginForm";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("Auth");

  return (
    <div className="flex min-h-screen flex-col pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} mb-5 text-4xl`}>{t("loginTitle")}</h1>

      <LoginForm />
    </div>
  );
}
