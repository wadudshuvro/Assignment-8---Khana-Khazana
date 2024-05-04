import RecipeCart from "@/components/RecipeCart";
import { getAllRecipe } from "@/dbQueries/queries";

export default async function CategoryPage() {
    const allRecipe = await getAllRecipe();

    return (
        <section className='container py-8'>
            <div>
                {allRecipe.length > 0 ? (
                    <>
                        <h3 className='font-semibold text-xl'>All Recipe</h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center'>
                            {allRecipe.map((recipe) => (
                                <RecipeCart key={recipe.id} recipe={recipe} />
                            ))}
                        </div>
                    </>
                ) : (
                    <p>{`Recipe Not Found!`}</p>
                )}
            </div>
        </section>
    );
}
