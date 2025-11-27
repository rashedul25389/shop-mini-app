'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '@/Context/AuthProviders';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const [dropdown, setDropdown] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const dropdownRef = useRef(null);

    const pathname = usePathname();

    const handleLogout = () => {
        logout();
        setDropdown(false);
        setMobileMenu(false);
    };

    const handleProtectedRoute = (path) => {
        if (user) {
            window.location.href = path;
        } else {
            window.location.href = '/auth/login';
        }
        setDropdown(false);
        setMobileMenu(false);
    };

    const avatar = user?.photoURL ? user.photoURL : <FaUserCircle />;

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Dashboard', path: '/dashboard', protected: true },
    ];

    return (
        <nav className="sticky top-0 bg-green-600 text-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="font-bold text-xl">
                    Shop Mini
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 font-medium">
                    {navLinks.map((link) => {
                        if (link.protected && !user) return null;
                        const isActive = pathname === link.path;
                        return (
                            <span
                                key={link.name}
                                onClick={() =>
                                    link.protected
                                        ? handleProtectedRoute(link.path)
                                        : null
                                }
                                className={`cursor-pointer ${
                                    isActive
                                        ? 'border-b-2 border-yellow-300'
                                        : ''
                                }`}>
                                {link.protected ? (
                                    link.name
                                ) : (
                                    <Link href={link.path}>{link.name}</Link>
                                )}
                            </span>
                        );
                    })}
                </div>

                {/* Auth Section */}
                <div className="hidden md:flex">
                    {!user ? (
                        <div className="flex gap-3">
                            <Link
                                href="/auth/login"
                                className={`px-4 py-2 rounded ${
                                    pathname === '/auth/login'
                                        ? 'bg-white text-green-600'
                                        : 'border border-white text-white hover:bg-white hover:text-green-600 transition'
                                }`}>
                                Login
                            </Link>
                            <Link
                                href="/auth/register"
                                className={`px-4 py-2 rounded ${
                                    pathname === '/auth/register'
                                        ? 'bg-white text-green-600'
                                        : 'border border-white text-white hover:bg-white hover:text-green-600 transition'
                                }`}>
                                Register
                            </Link>
                        </div>
                    ) : (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdown(!dropdown)}
                                className="flex items-center gap-3 bg-white text-green-600 px-3 py-2 rounded-full">
                                <img
                                    src={avatar}
                                    alt="User Avatar"
                                    className="w-7 h-7 rounded-full object-cover"
                                />
                                {user.displayName || user.email}
                            </button>
                            {dropdown && (
                                <div className="absolute right-0 bg-green-200 text-black mt-2 w-60 rounded shadow-lg">
                                    <div className="px-3 py-2 border-b text-sm flex items-center gap-2">
                                        <img
                                            src={avatar}
                                            alt="User Avatar"
                                            className="w-6 h-6 rounded-full object-cover"
                                        />
                                        {user.email}
                                    </div>
                                    <span
                                        onClick={() =>
                                            handleProtectedRoute('/add-product')
                                        }
                                        className="block px-3 py-2 hover:bg-green-500 cursor-pointer">
                                        Add Product
                                    </span>
                                    <span
                                        onClick={() =>
                                            handleProtectedRoute('/dashboard')
                                        }
                                        className="block px-3 py-2 hover:bg-green-500 cursor-pointer">
                                        Manage Products
                                    </span>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-3 py-2 hover:bg-green-500">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenu(!mobileMenu)}>
                        {mobileMenu ? (
                            <AiOutlineClose size={26} />
                        ) : (
                            <AiOutlineMenu size={26} />
                        )}
                    </button>
                </div>
            </div>

            {mobileMenu && (
                <div className="md:hidden bg-green-600 px-4 py-4 space-y-2">
                    {navLinks.map((link) => {
                        if (link.protected && !user) return null;
                        const isActive = pathname === link.path;
                        return (
                            <span
                                key={link.name}
                                onClick={() =>
                                    link.protected
                                        ? handleProtectedRoute(link.path)
                                        : setMobileMenu(false)
                                }
                                className={`block py-2 cursor-pointer ${
                                    isActive
                                        ? 'border-b-2 border-yellow-300'
                                        : ''
                                }`}>
                                {link.protected ? (
                                    link.name
                                ) : (
                                    <Link href={link.path}>{link.name}</Link>
                                )}
                            </span>
                        );
                    })}

                    {!user ? (
                        <div className="flex flex-col gap-2 mt-2">
                            <Link
                                href="/auth/login"
                                onClick={() => setMobileMenu(false)}
                                className={`block py-2 text-center rounded ${
                                    pathname === '/auth/login'
                                        ? 'bg-white text-green-600'
                                        : 'border border-white text-white hover:bg-white hover:text-green-600 transition'
                                }`}>
                                Login
                            </Link>
                            <Link
                                href="/auth/register"
                                onClick={() => setMobileMenu(false)}
                                className={`block py-2 text-center rounded ${
                                    pathname === '/auth/register'
                                        ? 'bg-white text-green-600'
                                        : 'border border-white text-white hover:bg-white hover:text-green-600 transition'
                                }`}>
                                Register
                            </Link>
                        </div>
                    ) : null}
                </div>
            )}
        </nav>
    );
}
