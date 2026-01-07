import { montserrat, playfair } from "@/app/layout";
import Link from "next/link";
import {
  FaBars,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";




export default function Header() {
    return (

        <header className="w-full border-b  border-gray-200">
            <div className="grid grid-cols-3 px-10 ">
                <div className="flex gap-4 py-12">
                   <IoSearchOutline className="w-5 h-5 hover:text-gray-500" />
                   <FaBars className="w-5 h-5 hover:text-gray-500" />
                </div>

                <div className="text-center py-6">
                    <Link href="/" className={` ${playfair.className}  text-6xl tracking-tighter`}>Unive<span className="font-bold">HOLE</span></Link>
                <p className={` ${montserrat.className}text-xl font-light text-gray-500 tracking-widest`}>POEIRA DAS ESTRELAS</p>
                </div>

                <div className="flex justify-end gap-4 text-lg py-12">
                    <span><FaFacebookF /></span>
                     <span><FaInstagram /></span>
                      <span><FaXTwitter /></span>
                </div>


            </div>

                <nav className="flex justify-center gap-8 py-4 text-sm font-bold uppercase tracking-wide ">
                    <a href="#" className="text-red-500">Home</a>
        <a href="#" className="hover:text-red-500">News</a>
        <a href="#" className="hover:text-red-500">Post Layouts</a>
        <a href="#" className="hover:text-red-500">Post Features</a>
        <a href="#" className="hover:text-red-500">Features</a>
          <a href="#" className="hover:text-red-500">Purchase</a>
                </nav>

        </header>
        // header cobrindo tudo. w-full border border - gray - 200

        // div para a primeira parte. - colocar em grid grid - cols - 3 items-center px-10 py-6

        // div para os items - aqui coloca eles em flex da um gap -4 text-xl
        // - Passa um btn arial-label Search e um de Menu. E para dentro dos btn os icones.

        // meio agr LOGO div aplicando apenas text-center e dentro da div
        // - H1 com text-3xl font-light tracking-widest - passa um  NOME e um span com font bold com NOME
        // P com texat-xs tracking-wide e text-gray-500 passando uma frase


        //div flex com justify-end gap-4 text-lg
        // - 3 span com as loos


        // Navegacao
        // tag nav flex justify-center ap-8 py-4 text-sm font-semi bold uppercase e trackinnnnn-wide
        // - 6 tags a home news psooooooo layouts posts features features purchases tudo com text red - 500 e hover:text-red-500

        // fecha header.


    )
}

