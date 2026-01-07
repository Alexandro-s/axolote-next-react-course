// IMG OVERLAY CENTRALIZAR

/*
SECTION

IMG

 DIV - VEU DE OVERLAY -> DIV - PARA O CONTEUDO - H2 P -> BTN


*/

import Image from "next/image"

export default function Banner() {
    return (
        <section className="relative w-full h-80 mt-20">


            <Image
            src="/image/img-3.avif"
            alt="Banner"
            fill
            className="object-cover"
            priority

            />

            <div className="absolute inset-0 bg-black/60">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-black space-y-4">

        <h2 className="text-2xl md:text-4xl font-bold">
          Let's Explore With Us
        </h2>
                     <button className="mt-4 px-6 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition">
          Join Us Now
        </button>
                </div>
            </div>





        </section>
    )
}
