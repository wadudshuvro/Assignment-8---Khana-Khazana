import { getAllRecipe } from "@/dbQueries/queries";
import { default as RecipeCart } from "./RecipeCart";

export default async function RecipeList() {
    const allRecipe = await getAllRecipe();

    return (
        <div className='col-span-12 md:col-span-9'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center'>
                {allRecipe.length > 0 ? (
                    allRecipe.map((recipe) => (
                        <RecipeCart key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <p>Recipe Not Found!</p>
                )}
            </div>
        </div>
    );
}
