import PostImage from "@/components/PostImage";
import PostSummary from "../PostSummary";
import { findAllPublicPostCache } from "@/lib/post/queries";
import { montserrat, playfair } from "@/app/layout";


export default async function  PostFeatured ()  {
    // const posts = await findAllPublicPost()

    // const post = posts[0];
    // const postLink = `/post/${post.slug}`
    return (

        <section className=" text-center pt-16 mb-16 sm:grid-cols-2 group" >


                <span className={`${montserrat.className}text-black/60 text-sm tracking-wide`}>Siga</span>
                <h1 className={`${playfair.className} mt-2 text-4xl sm:text-5xl  tracking-wide `}>Explore & Descubra</h1>
                <p className={` ${montserrat.className} mt-4 text-black/60 max-w-2xl mx-auto text-sm sm:text-base`}>Olhe novamente para esse ponto. Ele é aqui. Ele é o nosso lar. Ele somos nós</p>


        </section>
    )
}


//    <PostImage src="/image/img-1.avif"
//                 href={postLink}
//                 alt="Post do site"
//                 width={1200}
//                 height={720}
//             />
//             <PostSummary
//                 postLink={postLink}
//                 postHeading='h1'
//                 createdAt={post.createdAt}
//                 excerpt={post.excerpt}
//                 title={post.title}
//             />
//             <div></div>
