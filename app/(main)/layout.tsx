import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Sidebar, { MobileSidebar } from "@/components/layout/Sidebar";


export const metadata: Metadata = {
  title: "RamzHub",
  description: "The latest cryptocurrency market news and analysis with real-time updates, a modern user interface, and high speed.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* HEADER */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <Sidebar />
        {children}
      </div>

      {/* MOBILE SIDEBAR */}
      <MobileSidebar />
    </>
  );
}
