import { FormateRelativeDate} from "../../utils/formate-datetime"
import PostHeading from "../PostHeading"




type PostSummaryProps = {
    postHeading : 'h1' | 'h2' | 'p',
    createdAt : string,
    title : string,
    excerpt : string
    postLink : string




}


export default function PostSummary ({ postHeading, createdAt, title, excerpt, postLink } : PostSummaryProps) {
    return (

                        <div className="flex flex-col gap-4 sm:justify-center">


                            <PostHeading as={postHeading} url={postLink}>
                                {title}
                            </PostHeading>

                            <p>
                                {excerpt}
                            </p>



                        </div>
    )

}
