import { PostModel } from "@/model/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";



const ROOT_DIR = process.cwd()
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'post.json');

const SIMULATE_WAIT_IN_MS = 5000;


export class JsonPostRepository implements PostRepository {
    private async simulateWait() {
        if (SIMULATE_WAIT_IN_MS <= 0) return;

        await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
    }


    private async readFromDisk() : Promise<PostModel[]>{
        const jsonContent =  await readFile(JSON_POST_FILE_PATH, 'utf-8')
        const jsonParse = JSON.parse(jsonContent);
        const { posts } = jsonParse;
        return posts;

    };

    async findAllPublic(): Promise<PostModel[]> {


        const posts = await this.readFromDisk();
        return posts.filter(posts => posts.published )
    };

    async findById(id: string): Promise<PostModel> {



        const posts = await this.findAllPublic();

        const post = (await posts).find(post => post.id === id);

        if(!post) throw new Error("ID N encontrado")

            return post;
    };

    async findBySlug(slug: string): Promise<PostModel> {
        const posts = await this.findAllPublic();
        const post = (await posts).find(post => post.slug === slug);

        if(!post) throw new Error("Post nao encontrado por slug")

            return post;
    }
}





// (async () => {
//    const posts = await postRepository.findAll()
//    posts.forEach(post => {
//     console.log(post.id)
//    })



// })();

