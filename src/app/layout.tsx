import "@/app/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { getServerAuthSession } from "@/server/auth";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <AuthProvider session={session}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <ThemeProvider>
              <ToastProvider>{children}</ToastProvider>{" "}
            </ThemeProvider>
          </TRPCReactProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
