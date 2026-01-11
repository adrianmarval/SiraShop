import { Title } from "@/components";
import { AddressForm } from "./ui/AddressForm";

import { getCountries, getUserAddress } from "@/actions";
import { auth } from "@/auth.config";
import { getTranslations } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

export default async function AddressPage({ params }: Props) {
  const { locale } = params;
  const countries = await getCountries();
  const t = await getTranslations("Address");

  const session = await auth();

  if (!session?.user) {
    const tErrors = await getTranslations("Errors");
    return <h3 className="text-5xl">{tErrors("noSession")}</h3>;
  }

  const userAddress = (await getUserAddress(session.user.id)) ?? undefined;

  return (
    <div className="mb-72 flex flex-col px-10 sm:items-center sm:justify-center sm:px-0">
      <div className="flex w-full flex-col justify-center text-left xl:w-[1000px]">
        <Title title={t("title")} subtitle={t("subtitle")} />

        <AddressForm countries={countries} userStoredAddress={userAddress} locale={locale} />
      </div>
    </div>
  );
}
