import { PostModel } from "@/model/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import {desc, eq} from "drizzle-orm"



export class DrizzlePostRepository implements PostRepository {

 async findAllPublic(): Promise<PostModel[]> {
   const posts = await drizzleDb.query.posts.findMany({
    orderBy: (posts, {desc}) => desc(posts.createdAt),
    where: (posts, {eq}) => eq(posts.published, true )

   })
   return posts;
 }


 async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
        orderBy: (post, {desc}) => desc(post.createdAt)
    })
    return posts;
 }
async findById(id: string): Promise<PostModel>{
    console.log('\n', 'findBySlug', '\n')
    const postId = await drizzleDb.query.posts.findFirst({
        where: (posts, {eq} ) => eq(posts.id, id)
    })
    if(!postId) throw new Error ('Post nao achado')
        return postId;

}
async findBySlug(slug: string): Promise<PostModel>{
    const post = await drizzleDb.query.posts.findFirst({
        where:(posts, {eq, and}) =>
            and(eq(posts.published, true), eq(posts.slug, slug)),
    });
    if(!post) throw new Error('Post n chadado rerefente a slug')
        return post;
}

}

// nebulosas-planetarias-ultimo-suspiro true
// pulsars-os-farois-do-universo false

// 3993fcf7-2490-48ed-be2e-58c2030ee764 true
// be3f14a1-0105-4e2e-bfc9-133a05e7bda6 false
//'pulsars-os-farois-do-universo

// (async () => {
//     const repo = new DrizzlePostRepository();
//     const posts = await repo.findBySlug("nebulosas-planetarias-ultimo-suspiro");

//     console.log(posts)
// })();


