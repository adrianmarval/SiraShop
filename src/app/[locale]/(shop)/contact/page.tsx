import { Title } from "@/components";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="mb-10 px-5">
      <Title title={t("title")} subtitle={t("subtitle")} />

      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-gray-100 p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold">{t("support.title")}</h3>
          <p className="mb-4">{t("support.content")}</p>

          <div className="space-y-4">
            <div>
              <span className="block font-semibold">{t("support.email")}</span>
              <a href="mailto:support@crowdfast.store" className="text-blue-600 hover:underline">
                support@crowdfast.store
              </a>
            </div>

            <div>
              <span className="block font-semibold">{t("support.phone")}</span>
              <p>+1 (555) 123-4567</p>
            </div>

            <div>
              <span className="block font-semibold">{t("support.address")}</span>
              <p>
                Crowdfast Store HQ
                <br />
                123 Commerce St.
                <br />
                Business District, NY 10001
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="mb-4 text-xl font-bold">{t("businessHours.title")}</h3>
          <p className="mb-2">{t("businessHours.weekdays")}</p>
          <p className="mb-2">{t("businessHours.saturday")}</p>
          <p>{t("businessHours.sunday")}</p>

          <div className="mt-8">
            <p className="text-sm text-gray-500">{t("footer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
