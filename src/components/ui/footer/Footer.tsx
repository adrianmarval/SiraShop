import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mb-10 flex w-full flex-wrap justify-center space-x-4 px-4 text-xs">
      <Link href="/">
        <span className={`${titleFont.className} font-bold antialiased`}>Sira </span>
        <span>| shop </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/policies/privacy-policy" className="hover:underline">
        Privacy Policy
      </Link>

      <Link href="/policies/terms-conditions" className="hover:underline">
        Terms & Conditions
      </Link>

      <Link href="/policies/refund-policy" className="hover:underline">
        Refund Policy
      </Link>

      <Link href="/policies/shipping-policy" className="hover:underline">
        Shipping Policy
      </Link>

      <Link href="/contact" className="hover:underline">
        Contact Us
      </Link>
    </footer>
  );
};
