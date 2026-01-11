import { titleFont } from "@/config/fonts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="mb-10 flex w-full flex-wrap justify-center space-x-4 px-4 text-xs">
      <Link href="/">
        <span className={`${titleFont.className} font-bold antialiased`}>Crowdfast </span>
        <span>| Store </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/policies/privacy-policy" className="hover:underline">
        {t("privacy")}
      </Link>

      <Link href="/policies/terms-conditions" className="hover:underline">
        {t("terms")}
      </Link>

      <Link href="/policies/refund-policy" className="hover:underline">
        {t("refund")}
      </Link>

      <Link href="/policies/shipping-policy" className="hover:underline">
        {t("shipping")}
      </Link>

      <Link href="/contact" className="hover:underline">
        {t("contact")}
      </Link>
    </footer>
  );
};
