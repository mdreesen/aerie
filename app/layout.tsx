import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-ibm-plex-serif'});

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
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
