import { Footer, TopMenu } from "@/components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <TopMenu />
      <div className="min-h-screen relative text-[#1e3a58]">{children}</div>
      <Footer />
    </main>
  );
}
