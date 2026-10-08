"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const lastTrackedPathname = useRef<string | null>(null);

  useEffect(() => {
    if (isAdminPage || lastTrackedPathname.current === pathname) return;

    lastTrackedPathname.current = pathname;
    void fetch("/api/analytics/visit", {
      method: "POST",
      keepalive: true,
    }).catch((error: unknown) => {
      console.warn("Impossible d'enregistrer la visite.", error);
    });
  }, [isAdminPage, pathname]);

  return (
    <div
      className="app-container"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {!isAdminPage && <Navbar />}
      <main className="main-content" style={{ flex: 1 }}>
        {children}
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
}
