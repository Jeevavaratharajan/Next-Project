"use client";

import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import FirstVisitLoader from "@/components/ui/FirstVisitLoader";
import { usePathname } from "next/navigation";

const AppShell = ({ children }) => {
  const pathname = usePathname();
  const isAdminPanel = pathname === "/admin" || pathname.startsWith("/adminAddProperty") || pathname.startsWith("/adminPropertyList");
  const isPropertyDetailPage = /^\/property\/[^/]+$/.test(pathname);

  return (
    <>
      {pathname === "/" && <FirstVisitLoader />}
      {!isAdminPanel && <Header />}
      <main>{children}</main>
      {!isAdminPanel && !isPropertyDetailPage && <Footer />}
    </>
  );
};

export default AppShell;
