import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="shadow-md flex flex-col md:flex-row md:justify-start justify-center items-center  py-3">
            <div className="logo mx-5">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        height={40}
                        width={170}
                        alt="Loading..."
                        className="w-10/12"
                    />
                </Link>
            </div>
            <div className="nav">
                <ul className="flex space-x-2 font-bold md:text-sm">
                    <Link href="/tshirts">
                        <li>T-Shirts</li>
                    </Link>
                    <Link href="/hoodies">
                        <li>Hoodies</li>
                    </Link>
                    <Link href="/mugs">
                        <li>Mugs</li>
                    </Link>
                    <Link href="/stickers">
                        <li>Stickers</li>
                    </Link>
                </ul>
            </div>
            <div className="cart absolute right-0 mx-5">
                <AiOutlineShoppingCart size={30} />
            </div>
        </div>
    );
};

export default Navbar;