import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";



export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Axolote",
  description: "Projeto de estudos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className} >
        {children}
      </body>
    </html>
  );
}

