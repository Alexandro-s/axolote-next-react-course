type PostHeadingProps = {
    url : string,
    children : React.ReactNode
    as ? : 'h1' | 'h2' | 'p'
};
import { montserrat } from "@/app/layout";
import Link from "next/link";
export default function PostHeading ({url, children, as : Tag = 'h2' }: PostHeadingProps) {

    const headingClassMap = {
    h1: ` text-lg font-semibold text-sm sm:text-4xl `,
    h2: ` ${montserrat.className} font-poppins text-lg font-semibold tracking-wide border-b border-red-200`,
    p: `text-sm text-gray-400`
}

    return (
        <Tag className={headingClassMap[Tag]}>
            <Link className="hover:text-slate-600 transition " href={url}>{children}</Link>

        </Tag>

    )
}
