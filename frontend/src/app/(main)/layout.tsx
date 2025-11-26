"use client";

import Navigation from "@/components/global/navigation";
import Footer from "@/components/global/footer";
import PageTransition from "@/components/global/page-transition";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
