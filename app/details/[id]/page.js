import RecipeDetails from "@/components/details/RecipeDetails";
import RecipeSteps from "@/components/details/RecipeSteps";
import { getRecipeById } from "@/dbQueries/queries";

export async function generateMetadata({ params: { id } }) {
    const getRecipe = await getRecipeById(id);
    return {
        title: `Khana Khazana - ${getRecipe?.name}`,
        description: getRecipe?.description,
        openGraph: {
            images: [getRecipe?.thumbnail],
        },
    };
}

export default async function DetailsPage({ params: { id } }) {
    const getRecipe = await getRecipeById(id);
    return (
        <>
            <RecipeDetails recipe={getRecipe} />
            <RecipeSteps recipeSteps={getRecipe.steps} />
        </>
    );
}
