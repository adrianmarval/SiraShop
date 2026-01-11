import { Title } from "@/components";
import { useTranslations } from "next-intl";

export default function TermsConditionsPage() {
  const t = useTranslations("TermsConditions");

  return (
    <div className="mb-10 px-5">
      <Title title={t("title")} subtitle={t("subtitle")} />

      <div className="mx-auto max-w-[800px] space-y-6 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.agreement.title")}</h2>
          <p>{t("sections.agreement.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.ip.title")}</h2>
          <p>{t("sections.ip.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.userRepresentations.title")}</h2>
          <p>{t("sections.userRepresentations.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.products.title")}</h2>
          <p>{t("sections.products.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.payment.title")}</h2>
          <p>{t("sections.payment.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.returns.title")}</h2>
          <p>{t("sections.returns.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.contact.title")}</h2>
          <p>
            {t("sections.contact.content").split("support@crowdfast.store")[0]}
            <a href="mailto:support@crowdfast.store" className="text-blue-600 hover:underline">
              support@crowdfast.store
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
