import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Container from "@/components/Container";
import Header from "@/components/Header";
// import Footer from "@/components/Footer"



export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
    title: {
        default: 'Universe - Home',
        template: '%s | Axolote'
    },
    description: 'Site aula'
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={poppins.className} >
                <Container>
               
                    {children}


                </Container>



            </body>
        </html>
    );
}

