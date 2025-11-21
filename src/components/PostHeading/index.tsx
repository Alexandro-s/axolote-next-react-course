type PostHeadingProps = {
    url : string,
    children : React.ReactNode
    as ? : 'h1' | 'h2'
};
import Link from "next/link";
export default function PostHeading ({url, children, as : Tag = 'h2' }: PostHeadingProps) {

    const headingClassMap = {
    h1: 'text-2xl/tight font-extrabold sm:text-4xl',
    h2: 'text-2xl/tight font-bold'
}

    return (
        <Tag className={headingClassMap[Tag]}>
            <Link className="hover:text-slate-600 transition " href={url}>{children}</Link>
        </Tag>
    )
}
