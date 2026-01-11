import { getTranslations } from "next-intl/server";
export const revalidate = 60; // 60 segundos

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";

import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    query?: string;
    page?: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.query || "";
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const t = await getTranslations("Search");

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({
    page,
    query,
  });

  const productsStub = products; // To avoid unused variable warning if I decide to use it slightly differently, but here it matches directly.

  // if (products.length === 0) {
  //   redirect("/");
  // }

  return (
    <>
      <Title title={t("title")} subtitle={t("subtitle", { query })} className="mb-2" />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
