import PostList from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import Container from "@/components/Container";
import { Suspense } from "react";
import Header from "@/components/Header";
import PostFeatured from "@/components/PostFeatured";


export default function Homepage() {
    return (
        <Container>
            <Header />

            <Suspense fallback={<SpinLoader className="h-screen bg-gray-100" />}>
                <PostFeatured />
            </Suspense>
            <Suspense
                fallback={<SpinLoader className="h-screen bg-gray-100" />}>
                <PostList />
            </Suspense>

            <footer>
                <p className="text-6xl
                font-bold text-center
                py-8">
                    Footer</p>
            </footer>
        </Container>
    )
}
