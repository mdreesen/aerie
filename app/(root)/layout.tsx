import type { Metadata } from "next";
import Sidebar from "@/components/ui/navbar/Sidebar";
import { getLoggedInUser } from '@/actions/user.actions';
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Aerie",
  description: "Aerie puts you in control of your finances, high above the everyday. Experience the ease of managing your money from anywhere, with intuitive tools and a clear, bird's-eye view of your financial health. Aerie: Your secure nest for modern banking.",
  icons: {
    icon: ''
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in')

  return (
    <main>
      <Sidebar user={loggedIn}>
        {children}
      </Sidebar>
    </main>
  );
}
