'use client';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* =========================
                HERO SECTION
            ========================== */}
            <section className="relative bg-green-600 text-white py-24 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8')] bg-cover bg-center opacity-20"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                        Welcome to{' '}
                        <span className="text-yellow-300">Shop Mini</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-100 mb-8">
                        Your one-stop place for premium and trendy products.
                    </p>

                    <Link
                        href="/products"
                        className="bg-white text-green-700 px-8 py-4 font-bold text-lg rounded-full shadow-lg 
                        hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
                        Browse Products →
                    </Link>
                </div>
            </section>

            {/* =========================
                FEATURE SECTION
            ========================== */}
            <section className="py-16 px-6 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Why Shop With Us?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: 'Fast Delivery',
                            desc: 'Get products delivered quickly and safely.',
                        },
                        {
                            title: 'Best Quality',
                            desc: 'We provide top-quality authentic products.',
                        },
                        {
                            title: 'Secure Payment',
                            desc: 'Your payments are fully encrypted.',
                        },
                        {
                            title: '24/7 Support',
                            desc: 'We are always here to help you.',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-6 border bg-white rounded-2xl shadow-sm text-center 
                            hover:shadow-xl hover:-translate-y-2 hover:bg-green-50 transition-all duration-300 cursor-pointer">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================
                BANNER SECTION
            ========================== */}
            <section className="py-20 px-6 bg-green-700 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-green-800 via-green-700 to-green-600 opacity-40"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">
                        Hot Deals of the Week
                    </h2>
                    <p className="text-lg mb-8 text-gray-100">
                        Discover the most trending and discounted items!
                    </p>

                    <Link
                        href="/products"
                        className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold shadow-lg 
                        hover:bg-gray-200 hover:scale-105 transition-transform duration-300">
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* =========================
                POPULAR PRODUCTS CTA
            ========================== */}
            <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Popular Products
                </h2>
                <p className="text-gray-600 mb-6">
                    Check out what people are buying the most right now.
                </p>

                <Link
                    href="/products"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 
                    shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    View All Products
                </Link>
            </section>
        </div>
    );
}
