import PostImage from "@/components/PostImage";
import PostSummary from "../PostSummary";

export default function PostFeatured() {

    const slug = "NOP"
    const postLink = `/post/${slug}`
    return (

        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group" >
            <PostImage src="/image/img-1.avif"
                href={postLink}
                alt="Post do site"
                width={1200}
                height={720}
            />
            <PostSummary
                postLink={postLink}
                postHeading='h1'
                createdAt={'2025-01-07T22:54:10'}
                excerpt={'o Next.js já vem com várias decisões prontas, permitindo que você comece a desenvolver mais rapidamente.'}
                title={'10 hábitos para aumentar sua produtividade'}
            />
        </section>
    )
}
