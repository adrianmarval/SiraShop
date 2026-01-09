"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav aria-label="Main Navigation" className="flex w-full items-center justify-between px-5">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} font-bold antialiased`}>Sira</span>
          <span> | Shop</span>
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
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="h-5 w-5" />
        </Link>

        <Link href={totalItemsInCart === 0 && loaded ? "/empty" : "/cart"} className="mx-2">
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-blue-700 px-1 text-xs font-bold text-white fade-in">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="h-5 w-5" />
          </div>
        </Link>

        <button onClick={openSideMenu} className="m-2 rounded-md p-2 transition-all hover:bg-gray-100">
          Menú
        </button>
      </div>
    </nav>
  );
};
