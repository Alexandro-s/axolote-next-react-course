import Button from "@/components/Buttons"
import Image from "next/image"
import Link from "next/link"

export default function NotFoundPage () {
    return (
        <div className="relative h-screen   ">
          <Image
          src="/image/404.jpg"
          alt="cat"
          fill
          className="object-cover "
          />
          <div className="absolute inset-0 flex items-end justify-center text-center py-6 ">

            <Button variant="primary">
                    <Link href="/">

            Voltar ao início

            </Link>
            </Button>


          </div>

        </div>
    )
}

// deixa em bloco
// cor branca texto preto
// font semi bold
// p lateral 3 e vertical 3
// aredonda a lg e sombra a lg hover e animacao de trasiotion
