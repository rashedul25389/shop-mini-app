'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import dayjs from 'dayjs';
import Loader from '@/components/Loader';

export default function ProductDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/products/${id}`)
            .then((res) => setProduct(res.data.result))
            .catch((err) => {
                console.error(err);
                alert('Product not found');
                router.push('/products');
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return (
            <div className="p-6 text-center text-gray-700 text-xl font-semibold">
                <Loader />
            </div>
        );

    if (!product) return null;

    return (
        <div className="max-w-2xl mx-auto my-10 bg-white shadow-xl rounded-2xl overflow-hidden">
            {/* Banner Image */}
            {product.image ? (
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[450px] object-center shadow"
                />
            ) : (
                <div className="w-full h-[350px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
                    No Image Available
                </div>
            )}

            {/* Content Area */}
            <div className="p-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {product.title}
                </h1>

                {/* Full Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {product.full_description}
                </p>

                {/* Meta info */}
                <div className="bg-gray-50 border rounded-xl p-5 mb-8 shadow-sm">
                    <p className="text-green-700 font-bold text-2xl">
                        Price: $ {product.price}
                    </p>

                    <p className="text-gray-600 mt-3">
                        <span className="font-semibold text-gray-800">
                            Priority:
                        </span>{' '}
                        {product.products_priority}
                    </p>

                    <p className="text-gray-600 mt-1">
                        <span className="font-semibold text-gray-800">
                            Created:
                        </span>{' '}
                        {dayjs(product.createdAt).format('DD MMM YYYY')}
                    </p>
                </div>

                {/* Back button */}
                <button
                    onClick={() => router.back()}
                    className="px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-600 transition shadow">
                    ← Back
                </button>
            </div>
        </div>
    );
}
