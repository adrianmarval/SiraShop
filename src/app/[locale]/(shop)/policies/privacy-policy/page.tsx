import { Title } from "@/components";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="mb-10 px-5">
      <Title title={t("title")} subtitle={t("subtitle")} />

      <div className="mx-auto max-w-[800px] space-y-6 text-gray-700">
        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.introduction.title")}</h2>
          <p>{t("sections.introduction.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.dataCollected.title")}</h2>
          <p>{t("sections.dataCollected.content")}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>{t("sections.dataCollected.identity").split(":")[0]}:</strong> {t("sections.dataCollected.identity").split(":")[1]}
            </li>
            <li>
              <strong>{t("sections.dataCollected.contact").split(":")[0]}:</strong> {t("sections.dataCollected.contact").split(":")[1]}
            </li>
            <li>
              <strong>{t("sections.dataCollected.transaction").split(":")[0]}:</strong>{" "}
              {t("sections.dataCollected.transaction").split(":")[1]}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.usage.title")}</h2>
          <p>{t("sections.usage.content")}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>{t("sections.usage.contract")}</li>
            <li>{t("sections.usage.legitimate")}</li>
            <li>{t("sections.usage.legal")}</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.payment.title")}</h2>
          <p>
            {t.rich("sections.payment.content", {
              link: (chunks) => (
                <a href="https://stripe.com/privacy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  {chunks}
                </a>
              ),
            })}
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.security.title")}</h2>
          <p>{t("sections.security.content")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-bold">{t("sections.contact.title")}</h2>
          <p>
            {t("sections.contact.content").split(": support@crowdfast.store")[0]}:{" "}
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
