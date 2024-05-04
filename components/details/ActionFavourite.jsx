"use client";
import { addFavouriteRecipe } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function ActionFavourite({ recipeId }) {
    const router = useRouter();

    const { auth, setAuth, setFevPath } = useAuth();

    const isFavourited = auth?.favourites.find((id) => id === recipeId);

    const [favourited, setFavourited] = useState(isFavourited);

    const [isPending, startTransition] = useTransition();

    const toggleFavourited = async () => {
        if (auth) {
            const currentPath = window.location.pathname;

            const favouriteRecipe = await addFavouriteRecipe(
                recipeId,
                auth?.id,
                currentPath
            );

            const foundRecipe = auth.favourites.find(
                (id) => id.toString() === recipeId
            );

            // const foundRecipe = favouriteRecipe.favourites.find(
            //     (id) => id.toString() === recipeId
            // );

            if (!foundRecipe) {
                setAuth({
                    ...auth,
                    favourites: [...auth.favourites, recipeId],
                });
            } else {
                const unFavourited = auth.favourites.filter(
                    (id) => id.toString() !== recipeId
                );

                setAuth({
                    ...auth,
                    favourites: [...unFavourited],
                });
            }

            console.log(favouriteRecipe);
            console.log(auth);

            setFavourited(!favourited);
        } else {
            setFevPath(window.location.pathname);
            router.push("/login");
        }
    };

    return (
        <button
            onClick={() =>
                startTransition(() => {
                    toggleFavourited();
                })
            }
        >
            <div className='flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]'>
                {favourited ? (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='red'
                        stroke='red'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-heart'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
                    </svg>
                ) : (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='icon icon-tabler icons-tabler-outline icon-tabler-heart'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
                    </svg>
                )}

                <span>Favourite</span>
            </div>
        </button>
    );
}
