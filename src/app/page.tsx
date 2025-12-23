import PostList from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import PostFeatured from "@/components/PostFeatured";
import Banner from "@/components/Bannner";
import Header from "@/components/Header";


export default function Homepage() {
    return (

        <>
            <>

                <Suspense fallback={<SpinLoader className="h-screen bg-gray-100" />}>
                    <Header />
                </Suspense>


                <Suspense fallback={<SpinLoader className="h-screen bg-gray-100" />}>
                    <PostFeatured />
                </Suspense><Suspense
                    fallback={<SpinLoader className="h-screen bg-gray-100" />}>
                    <PostList />
                </Suspense></>

                <Banner />

        </>



    )
}
