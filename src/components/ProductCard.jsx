'use client';
import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <div className="border border-gray-200 rounded-2xl p-4 shadow hover:shadow-lg transition bg-white">
            {/* Product Image */}
            {product.image ? (
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-44 object-cover rounded-xl mb-3"
                />
            ) : (
                <div className="w-full h-44 bg-gray-100 flex items-center justify-center rounded-xl mb-3">
                    <span className="text-gray-400">No Image</span>
                </div>
            )}

            {/* Product Info */}
            <h2 className="font-bold text-lg text-gray-800">{product.title}</h2>
            <p className="text-gray-600 line-clamp-2 mb-2">
                {product.short_description}
            </p>
            <p className="font-bold text-green-600 mb-2">৳ {product.price}</p>
            <p className="text-sm text-gray-500 mb-3">
                Priority: {product.products_priority}
            </p>

            {/* Details Link */}
            <Link
                href={`/products/${product._id}`}
                className="text-blue-600 hover:underline font-medium">
                View Details
            </Link>
        </div>
    );
}
