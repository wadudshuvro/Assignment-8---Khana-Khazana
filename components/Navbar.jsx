import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import SignlnOut from "./auth/SignlnOut";

export default function Navbar() {
    return (
        <nav>
            <div className='container flex justify-between py-6'>
                <Link href='/'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        height={40}
                        className='object-cover h-[40px]'
                    />
                </Link>

                <ul className='flex gap-4 text-sm text-gray-500'>
                    <li className='py-2 active'>
                        <Link href='/'>Home</Link>
                    </li>

                    <li className='py-2'>
                        <Link href='/recipe'>Recipe</Link>
                    </li>

                    <li className='py-2'>
                        <Link href='/'>About us</Link>
                    </li>

                    <SignlnOut />
                </ul>
            </div>
        </nav>
    );
}
