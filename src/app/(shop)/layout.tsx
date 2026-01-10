import { Suspense } from "react";
import { Footer, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <Suspense>
        <TopMenu />
      </Suspense>
      <Sidebar />

      <div className="px-0 sm:px-10">{children}</div>

      <Footer />
    </main>
  );
}
