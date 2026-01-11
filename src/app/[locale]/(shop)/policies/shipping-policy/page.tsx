import { Title } from "@/components";
import { useTranslations } from "next-intl";

export default function ShippingPolicyPage() {
  const t = useTranslations("ShippingPolicy");

  return (
    <div className="mb-10 px-5">
      <Title title={t("title")} subtitle={t("subtitle")} />

      <div className="mx-auto max-w-[800px] space-y-6 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.processing.title")}</h2>
          <p>{t("sections.processing.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.rates.title")}</h2>
          <p>{t("sections.rates.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.international.title")}</h2>
          <p>{t("sections.international.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.status.title")}</h2>
          <p>{t("sections.status.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.poBoxes.title")}</h2>
          <p>{t("sections.poBoxes.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.returns.title")}</h2>
          <p>
            {t("sections.returns.content").split("support@crowdfast.store")[0]}
            <a href="mailto:support@crowdfast.store" className="text-blue-600 hover:underline">
              support@crowdfast.store
            </a>{" "}
            {t("sections.returns.content").split("support@crowdfast.store")[1]}
          </p>
        </section>
      </div>
    </div>
  );
}
