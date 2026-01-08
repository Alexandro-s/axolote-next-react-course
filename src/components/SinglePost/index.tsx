import { findBySlugCached } from "@/lib/post/queries";
import Image from "next/image";

import { FormateRelativeDate } from "@/utils/formate-datetime";
import SafeMarkDown from "../SafeMarkDown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findBySlugCached(slug);

  return (
  <article className="mx-auto max-w-3xl px-4 py-14 space-y-12 text-foreground mb-16">


  <header className="space-y-4">
    <h1 className="font-display text-lg md:text-5xl font-semibold tracking-tight leading-tight">
      {post.title}
    </h1>



    <p className="text-sm opacity-70">
      {post.author} • {FormateRelativeDate(post.createdAt)}
    </p>
  </header>



  <figure className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
    <Image
      src={post.coverImageUrl}
      alt={post.title}
      fill
      className="object-cover"
    />
  </figure>


  <p className="text-xl font-light leading-relaxed border-l-4 border-(--sciam-red) pl-4 italic">
    {post.excerpt}
  </p>



  <SafeMarkDown markdown={post.content} />
</article>
  );
}
