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

        <header className="w-full border-b  border-gray-200 sm:">


            <div className="grid grid-cols-3 items-center px-4 sm:px-10  ">


                <div className="flex gap-4 py-6 lg:py-12">
                   <IoSearchOutline className="hidden lg:block w-5 h-5 hover:text-gray-500" />
                   <FaBars className="w-5 h-5 hover:text-gray-500" />
                </div>



                <div className="text-center py-6">
                    <Link href="/" className={` ${playfair.className}  text-3xl lg:text-6xl tracking-tighter`}>Unive<span className="font-bold">HOLE</span></Link>
               <p className={`${montserrat.className} text-xs sm:text-sm font-light text-gray-500 tracking-widest `}>
POEIRA DAS ESTRELAS</p>
                </div>

                <div className="hidden lg:flex justify-end gap-4 text-lg py-12">
                    <span><FaFacebookF /></span>
                     <span><FaInstagram /></span>
                      <span><FaXTwitter /></span>
                </div>


            </div>

                <nav className="hidden lg:flex justify-center gap-8 py-4 text-sm font-bold uppercase tracking-wide ">
                    <a href="#" className="text-red-500">Home</a>
        <a href="#" className="hover:text-red-500">News</a>
        <a href="#" className="hover:text-red-500">Post Layouts</a>
        <a href="#" className="hover:text-red-500">Post Features</a>
        <a href="#" className="hover:text-red-500">Features</a>
          <a href="#" className="hover:text-red-500">Purchase</a>
                </nav>

        </header>
       

    )
}

