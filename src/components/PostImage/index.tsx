import Link from "next/link"
import Image from "next/image"

type PostImageProps = {
  href: string
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function PostImage({
  href,
  src,
  alt,
  width,
  height,
  className
}: PostImageProps) {
  return (
    <Link href={href}>
      <div
        className={` relative aspect-video overflow-hidden rounded-xl group ${className}`}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          priority
          className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  )
}
