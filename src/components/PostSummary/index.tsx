import { montserrat } from "@/app/layout"
import PostHeading from "../PostHeading"




type PostSummaryProps = {
    postHeading: 'h1' | 'h2' | 'p',
    createdAt: string,
    title: string,
    excerpt: string
    postLink: string




}


export default function PostSummary({ postHeading,title, excerpt, postLink }: PostSummaryProps) {
    return (

        <div className="flex flex-col">
            <div className="min-h-[50px]">
                <PostHeading as={postHeading} url={postLink}>
                    {title}
                </PostHeading>
                 </div>
                <div className="w-12 h-[2px] bg-red-500 my-4" />
                <p className={`${montserrat.className} text-sm leading-relaxed`}>
                    {excerpt}
                </p>

        </div>
    )

}
