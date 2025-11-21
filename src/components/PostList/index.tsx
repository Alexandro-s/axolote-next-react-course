import { postRepository } from "@/repositories/post"
import PostImage from "../PostImage"
import PostSummary from "../PostSummary"


export default async function PostList() {

    const posts = await postRepository.findAllPublic()

    return (

        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {posts.map((post) => {

                const postLink = `/post/${post.slug}`
                return (
                    <div key={post.id} className="flex flex-col gap-4 group">

                        <PostImage
                            href={postLink}
                            src={post.coverImageUrl}
                            alt={post.title}
                            width={1200}
                            height={720}
                        />

                        <PostSummary
                        postLink={postLink}
                        postHeading='h2'
                        createdAt={post.createdAt}
                        excerpt={post.excerpt}
                        title={post.title}



                        />

                    </div>
                )
            })}
        </div>

    )
}
