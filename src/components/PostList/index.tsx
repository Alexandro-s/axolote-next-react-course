
import { findAllPublicPostCache } from "@/lib/post/queries"
import PostImage from "../PostImage"
import PostSummary from "../PostSummary"
import { FormateRelativeDate } from "@/utils/formate-datetime"
import { montserrat } from "@/app/layout"


export default async function PostList() {

    const posts = await findAllPublicPostCache()

    return (

       <section  className="max-w-6xl mx-auto px-6 py-16" >
        <h2 className={`${montserrat.className} text-2xl font-semibold mb-5`} >Lasted Stories on Universe</h2>

         <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

            {posts.slice(1).map((post) => {

                const postLink = `/post/${post.slug}`
                return (
                    <div key={post.id} className="flex flex-col gap-4 group">

                     <PostImage
  href={postLink}
  src={post.coverImageUrl}
  alt={post.title}
  width={1200}
  height={720}
  date={FormateRelativeDate(post.createdAt)} 
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
       </section>

    )
}
function findAllPublic() {
    throw new Error("Function not implemented.")
}

