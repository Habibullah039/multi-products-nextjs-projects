import Link from 'next/link';
import brandLogo from "@/assets/logo.png";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="navbar bg-blue-600">
            <div className="navbar-start mx-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/support">Support</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/">
                    <Image src={brandLogo} width={100} height={100} alt="brand logo" />

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-lg">
                    <li className='mx-4'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='mx-4'>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li className='mx-4'>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className='mx-4'>
                        <Link href="/support">Support</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <Link
                    href="/blogs/create"
                    className="btn btn-accent text-white rounded-full px-5"
                >
                    Post Blog
                </Link>
            </div>
        </div>
    );
};

export default Navbar;