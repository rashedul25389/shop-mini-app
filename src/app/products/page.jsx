'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Loader from '@/components/Loader';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const pathname = usePathname();

    useEffect(() => {
        setSearch('');
        setCategory('');
        setLoading(true);

        axios
            .get('http://localhost:4000/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [pathname]);

    const filteredProducts = products.filter((p) => {
        return (
            p.title.toLowerCase().includes(search.toLowerCase()) &&
            (category ? p.category === category : true)
        );
    });

    if (loading)
        return (
            <div className="p-6 text-center text-gray-700 text-xl">
                <Loader/>
            </div>
        );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold mb-3 text-white">
                    Our Products
                </h1>
                <p className="text-gray-400 text-lg">
                    Explore our latest items. Search & filter to find exactly
                    what you need.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg 
                    bg-white text-gray-900 placeholder-gray-500 
                    focus:ring-2 focus:ring-green-500 hover:border-green-400 
                    outline-none transition-all duration-300"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full sm:w-1/4 p-3 border border-gray-300 rounded-lg 
                    bg-white text-gray-900 focus:ring-2 focus:ring-green-500 
                    hover:border-green-400 outline-none transition-all duration-300">
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                        <div
                            key={p._id}
                            className="border border-gray-200 p-4 rounded-xl bg-green-100 
                            shadow-sm hover:shadow-xl hover:-translate-y-2 
                            transition-all duration-300 cursor-pointer flex flex-col">
                            {p.image ? (
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-56 object-center rounded-lg mb-4 
                                    transition-transform duration-300 ease-out 
                                    hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                                    <span className="text-gray-500 text-sm">
                                        No Image
                                    </span>
                                </div>
                            )}

                            <h2 className="font-bold text-xl mb-1 text-gray-900">
                                {p.title}
                            </h2>

                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                {p.short_description}
                            </p>

                            <p className="text-green-600 font-extrabold text-lg mb-4">
                                $ {p.price}
                            </p>

                            <Link
                                href={`/products/${p._id}`}
                                className="mt-auto bg-green-600 text-white py-2 rounded-lg 
                                text-center font-medium transition-all duration-300 
                                hover:bg-green-700 hover:shadow-lg hover:-translate-y-1">
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-lg">
                        No products found
                    </p>
                )}
            </div>
        </div>
    );
}
