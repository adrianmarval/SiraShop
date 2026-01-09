"use client";
import { useEffect, useState, useRef } from "react";

import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import { Input } from "@/components/ui/input";

export const TopMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
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
          <span className={`${titleFont.className} font-bold antialiased`}>Sira</span>
          <span> | Store</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/gender/men">
          Hombres
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/gender/women">
          Mujeres
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/gender/kid">
          Niños
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
            placeholder="Buscar..."
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
          Menú
        </button>
      </div>
    </nav>
  );
};
