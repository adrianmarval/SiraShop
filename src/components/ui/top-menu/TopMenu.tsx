"use client";
import { useEffect, useState, useRef } from "react";

import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import { Input } from "@/components/ui/input";

export const TopMenu = () => {
  const t = useTranslations("TopMenu");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  // useSearchParams stays from next/navigation as next-intl doesn't wrap it directly in typical setup,
  // but let's check if I need to import it from next/navigation.
  // Yes, I deleted the import above. Let me re-add useSearchParams from next/navigation.
  const searchParams = useSearchParams();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    setTerm(searchParams.get("query") ?? "");
  }, [searchParams]);

  return (
    <nav aria-label="Main Navigation" className="flex w-full items-center justify-between px-5">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} font-bold antialiased`}>Crowdfast</span>
          <span> | Store</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/gender/men">
          {t("men")}
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/gender/women">
          {t("women")}
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/gender/kid">
          {t("kids")}
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        {/* Search Input */}
        {/* Search Input */}
        {/* Search Input */}
        {/* Search Input */}
        <div className="relative mx-2">
          <Input
            type="text"
            placeholder={t("search")}
            value={term}
            className="w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-1 transition-all focus:border-blue-500 focus:outline-none"
            onChange={(e) => {
              const newTerm = e.target.value;
              setTerm(newTerm);

              const params = new URLSearchParams(searchParams);

              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }

              timeoutRef.current = setTimeout(() => {
                if (newTerm) {
                  params.set("query", newTerm);
                  params.set("page", "1");
                  router.replace(`/search?${params.toString()}`);
                } else {
                  params.delete("query");
                  if (pathname === "/search") {
                    router.replace(`/search?${params.toString()}`);
                  }
                }
              }, 500);
            }}
          />
          {term && (
            <button
              onClick={() => {
                setTerm("");
                const params = new URLSearchParams(searchParams);
                params.delete("query");
                if (pathname === "/search") {
                  router.replace(`/search?${params.toString()}`);
                } else {
                  // If we are not on search page, we just clear the input (which is already done by setTerm)
                  // But wait, if I typed "foo" (on home), term is "foo", URL has ?query=foo (after debounce).
                  // If I click X, I want to remove ?query=foo from URL too.
                  router.replace(`${pathname}`);
                }
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <IoCloseOutline className="h-5 w-5" />
            </button>
          )}
        </div>

        <Link href={totalItemsInCart === 0 && loaded ? "/empty" : "/cart"} className="mx-2">
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-blue-700 px-1 text-xs font-bold text-white fade-in">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="h-5 w-5 cursor-pointer" />
          </div>
        </Link>

        <button onClick={openSideMenu} className="m-2 rounded-md p-2 transition-all hover:bg-gray-100">
          {t("menu")}
        </button>

        {/* Language Switcher */}
        <div className="mx-2 flex items-center gap-2">
          <button
            onClick={() => router.replace(pathname, { locale: "en" })}
            className={`rounded px-2 py-1 ${locale === "en" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            EN
          </button>
          <button
            onClick={() => router.replace(pathname, { locale: "es" })}
            className={`rounded px-2 py-1 ${locale === "es" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
};
