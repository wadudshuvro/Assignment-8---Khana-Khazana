import { getCategoryList } from "@/app/actions";
import Link from "next/link";

export default async function CategoryListSection() {
    const categoryList = await getCategoryList();

    return (
        <div className='col-span-12 md:col-span-3'>
            <h3 className='font-bold text-xl'>Recipes</h3>
            <ul className='pl-2 my-6 space-y-4 text-gray-500 text-sm'>
                {categoryList.map((category, index) => (
                    <li key={index}>
                        <Link
                            href={`/category/${encodeURIComponent(category)}`}
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
