import Link from "next/link"
import Image from "next/image"


type PostImageProps = {
  href: string
  src: string
  alt: string
  width: number
  height: number
  className?: string
  date?: string           // ⬅ ADICIONAR A DATA AQUI
}

export default function PostImage({
  href,
  src,
  alt,
  width,
  height,
  className,
  date
}: PostImageProps) {
  return (
   <Link href={href}>
  <div className="relative aspect-video overflow-hidden group">
    {/* IMAGEM */}
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority
      className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
    />

    {/* CÍRCULO DE DATA */}
   { date && <div
      className="
        absolute
        bottom-0 left-0
        translate-x-[-25%] translate-y-[25%]
        w-14 h-14
        bg-white text-black
        rounded-full
        flex flex-col items-center justify-center
        shadow-lg
        z-20
      "
    ><div className=" relative flex flex-col items-center justify-center uppercase">
  <span className="text-xl font-bold text-[0.8rem] ">
    {date.split(" ")[0]}
  </span>
  <span className="text-[0.65rem] font-bold tracking-wider text-black/60 mb-[]">
    {date.split(" ")[1]}
  </span>
</div>





    </div>}
  </div>
</Link>

  )
}
