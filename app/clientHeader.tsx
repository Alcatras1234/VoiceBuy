"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/shared/header";

export function ClientHeader() {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return !isAdminPage ? <Header /> : null;
}
