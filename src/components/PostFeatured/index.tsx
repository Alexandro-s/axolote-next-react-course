
import { montserrat, playfair } from "@/app/layout";


export default async function  PostFeatured ()  {

    return (

        <section className=" text-center pt-16 mb-16 sm:grid-cols-2 group" >


                <span className={`${montserrat.className}text-black/60 text-sm tracking-wide`}>Siga</span>
                <h1 className={`${playfair.className} mt-2 text-2xl sm:text-4xl  tracking-wide `}>Explore & Descubra</h1>
                <p className={` ${montserrat.className} mt-4 text-black/60 max-w-2xl mx-auto text-sm sm:text-base`}>Olhe novamente para esse ponto. Ele é aqui. Ele é o nosso lar. Ele somos nós</p>


        </section>
    )
}


