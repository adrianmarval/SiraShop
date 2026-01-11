export const revalidate = 60; // 60 segundos

import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

interface Props {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "Crowdfast | Store",
  description: "Tienda de ropa virtual para hombres, mujeres y niños",
};

export default async function Home({ searchParams }: Props) {
  const t = await getTranslations("Home");
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <Title title={t("title")} subtitle={t("subtitle")} className="mb-2" />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
