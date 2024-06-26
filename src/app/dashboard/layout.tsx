import React from "react";
import { Metadata } from "next";
import { Sidebar } from "@/components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard - Administrativo",
  description: "This is the main Dashboard",
  keywords: ["Dashboard", "Counter"],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="w-full text-slate-900">{children}</div>
      </div>
    </div>
  );
}
