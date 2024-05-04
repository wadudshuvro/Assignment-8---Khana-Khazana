import RecipeCart from "@/components/RecipeCart";
import { getRecipeByAuthor } from "@/dbQueries/queries";

export default async function CategoryPage({ params: { authorName } }) {
    const recipeByAuthorName = decodeURIComponent(authorName);
    const allRecipeByCategory = await getRecipeByAuthor(recipeByAuthorName);

    return (
        <section className='container py-8'>
            <div>
                {allRecipeByCategory.length > 0 ? (
                    <>
                        <h3 className='font-semibold text-xl'>
                            Recipe By Auther: {recipeByAuthorName}
                        </h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center'>
                            {allRecipeByCategory.map((recipe) => (
                                <RecipeCart key={recipe.id} recipe={recipe} />
                            ))}
                        </div>
                    </>
                ) : (
                    <p>{`Recipe Category ${recipeByAuthorName} Not Found!`}</p>
                )}
            </div>
        </section>
    );
}
