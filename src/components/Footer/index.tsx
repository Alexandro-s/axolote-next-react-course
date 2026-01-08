// cria class footer
// usa tag footer
// p com py-8
// span com Copyright &copy e objeto data - link para pagina principa.

import { playfair } from "@/app/layout";
import Link from "next/link";

export default function Footer () {
    return (
        <footer className=" pb-16 text-center">
            <p className={`${playfair.className} py-8`}>Copyright &copy; {new Date().getFullYear()} - <Link href="/"className="font-bold" >UniveHole</Link></p>

        </footer>
    )
}
