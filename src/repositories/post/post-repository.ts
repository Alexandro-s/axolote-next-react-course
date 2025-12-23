import { PostModel } from "@/model/post/post-model";


export interface PostRepository {

    findAllPublic(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
     findBySlug(slug: string): Promise<PostModel>;

}
