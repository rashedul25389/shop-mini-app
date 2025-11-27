import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            {/* MAIN GRID */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                        Shop Mini
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Your trusted marketplace for premium quality products at
                        the best prices.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-green-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="hover:text-green-400 transition">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard"
                                className="hover:text-green-400 transition">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-green-400 transition">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* SOCIAL LINKS */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Follow Us
                    </h3>
                    <div className="flex gap-5 text-xl">
                        <a href="#" className="hover:text-green-400 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-green-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-green-400 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-green-400 transition">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()}{' '}
                <span className="text-white font-semibold">Shop Mini</span>. All
                rights reserved.
            </div>
        </footer>
    );
}
