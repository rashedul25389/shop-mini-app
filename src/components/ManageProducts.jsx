'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Loader from './Loader';

export default function ManageProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await axios.get('/api/products');
            setProducts(res.data);
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to fetch products!',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`/api/products/${id}`);
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                );
                fetchProducts();
            } catch (err) {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to delete product!',
                });
            }
        }
    };

    if (loading)
        return (
            <div className="p-6 text-center text-gray-700 text-xl">
                <Loader />
            </div>
        );

    return (
        <div className="py-5 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-500 text-center">
                Manage Products
            </h1>

            {products.length === 0 && (
                <p className="text-center text-gray-500">No products found</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                    <div
                        key={p._id}
                        className="border border-gray-200 rounded-2xl p-4 shadow bg-green-100
                        hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                        {p.image ? (
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-50 object-center rounded-xl mb-3 hover:scale-105 transition-transform duration-300"
                            />
                        ) : (
                            <div className="w-full h-44 bg-gray-100 flex items-center justify-center rounded-xl mb-3">
                                <span className="text-gray-400">No Image</span>
                            </div>
                        )}

                        <h2 className="font-bold text-lg text-gray-800 mb-1">
                            {p.title}
                        </h2>
                        <p className="text-gray-600 line-clamp-2 mb-2">
                            {p.short_description}
                        </p>
                        <p className="font-bold text-green-600 mb-3">
                            $ {p.price}
                        </p>
                        <p className="text-sm text-gray-500 mb-3">
                            Priority: {p.products_priority}
                        </p>

                        <div className="flex justify-between">
                            <Link
                                href={`/products/${p._id}`}
                                className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200">
                                View
                            </Link>
                            <button
                                onClick={() => handleDelete(p._id)}
                                className="text-red-600 hover:underline hover:text-red-800 transition-colors duration-200">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
