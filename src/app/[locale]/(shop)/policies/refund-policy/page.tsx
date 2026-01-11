import { Title } from "@/components";
import { useTranslations } from "next-intl";

export default function RefundPolicyPage() {
  const t = useTranslations("RefundPolicy");

  return (
    <div className="mb-10 px-5">
      <Title title={t("title")} subtitle={t("subtitle")} />

      <div className="mx-auto max-w-[800px] space-y-6 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.returns.title")}</h2>
          <p>{t("sections.returns.content1")}</p>
          <p className="mt-2">{t("sections.returns.content2")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.refunds.title")}</h2>
          <p>{t("sections.refunds.content1")}</p>
          <p className="mt-2">{t("sections.refunds.content2")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.lateRefunds.title")}</h2>
          <p>{t("sections.lateRefunds.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.exchanges.title")}</h2>
          <p>
            {t("sections.exchanges.content").split("support@crowdfast.store")[0]}
            <a href="mailto:support@crowdfast.store" className="text-blue-600 hover:underline">
              support@crowdfast.store
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.shipping.title")}</h2>
          <p>{t("sections.shipping.content1")}</p>
          <p className="mt-2">{t("sections.shipping.content2")}</p>
        </section>
      </div>
    </div>
  );
}
