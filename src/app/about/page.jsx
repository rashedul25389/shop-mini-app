'use client';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* =========================
                 HERO SECTION
            ========================== */}
            <section className="relative bg-green-600 text-white py-24 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508780709619-79562169bc64')] bg-cover bg-center opacity-20"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                        About <span className="text-yellow-300">Shop Mini</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-100 mb-8">
                        Learn more about our story, values, and commitment to
                        delivering quality products.
                    </p>

                    <Link
                        href="/products"
                        className="bg-white text-green-700 px-8 py-4 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition">
                        Browse Products →
                    </Link>
                </div>
            </section>

            {/* =========================
                 ABOUT SECTION
            ========================== */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img
                            src="https://i.ibb.co.com/cnTyZZ2/Sony-Play-Station-5.jpg"
                            alt="About us"
                            className="rounded-2xl shadow-lg hover:scale-105 transition"
                        />
                    </div>

                    <div className="lg:w-1/2 text-gray-800">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Story
                        </h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            Shop Mini started with a vision to provide premium
                            quality products at the most affordable prices. Our
                            team is dedicated to sourcing the latest trends and
                            ensuring a seamless shopping experience for all our
                            customers.
                        </p>
                        <p className="mb-6 text-lg leading-relaxed">
                            We prioritize customer satisfaction and trust,
                            aiming to build a community of happy and loyal
                            shoppers.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-md">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* =========================
                 MISSION / VISION
            ========================== */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: 'Our Mission',
                            desc: 'Deliver quality and trendy products that delight our customers.',
                        },
                        {
                            title: 'Our Vision',
                            desc: 'Become the go-to platform for online shopping enthusiasts.',
                        },
                        {
                            title: 'Our Values',
                            desc: 'Transparency, reliability, and customer-first approach in every step.',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
                            <h3 className="text-xl font-bold mb-2 text-green-600">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
