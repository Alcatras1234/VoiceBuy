import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClientHeader } from "./clientHeader";
import "./globals.css";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});


export const metadata: Metadata = {
  title: "VoiceBuy",
  description: "Продажа озвучки для видео и аудио",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        <main className="min-h-screen">
          <ClientHeader />
          {children}

        </main>
      </body>
    </html>
  );
}
