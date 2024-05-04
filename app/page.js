import Loading from "@/components/Loading";
import RecipeList from "@/components/RecipeList";
import CategoryListSection from "@/components/landing/CategoryListSection";
import HeroSection from "@/components/landing/HeroSection";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <HeroSection />
            <section className='container py-8'>
                <div className='grid grid-cols-12 py-4'>
                    <Suspense key={"khana"} fallback={<Loading />}>
                        <CategoryListSection />
                        <RecipeList />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
