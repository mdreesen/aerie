import type { Metadata } from "next";
import Sidebar from "@/components/ui/Sidebar";

export const metadata: Metadata = {
  title: "Aerie",
  description: "Aerie puts you in control of your finances, high above the everyday. Experience the ease of managing your money from anywhere, with intuitive tools and a clear, bird's-eye view of your financial health. Aerie: Your secure nest for modern banking.",
  icons: {
    icon: ''
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Sidebar>
        {children}
      </Sidebar>
    </main>
  );
}
