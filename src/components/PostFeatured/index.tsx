import PostImage from "@/components/PostImage";
import PostSummary from "../PostSummary";
import { findAllPublicPost } from "@/lib/post/queries";


export default async function  PostFeatured ()  {
    const posts = await findAllPublicPost()

    const post = posts[0];
    const postLink = `/post/${post.slug}`
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
                createdAt={post.createdAt}
                excerpt={post.excerpt}
                title={post.title}
            />
        </section>
    )
}
