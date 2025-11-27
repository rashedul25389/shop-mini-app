'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function AddProductForm() {
    const [data, setData] = useState({
        title: '',
        short_description: '',
        full_description: '',
        price: '',
        image: '',
        products_priority: '', // high, medium, low
    });

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Added:', data);
        toast.success('Product added successfully! 🎉');
        setData({
            title: '',
            short_description: '',
            full_description: '',
            price: '',
            image: '',
            products_priority: '',
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white border border-gray-200 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto my-10">
            <input
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <input
                name="short_description"
                value={data.short_description}
                onChange={handleChange}
                placeholder="Short Description"
                required
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <textarea
                name="full_description"
                value={data.full_description}
                onChange={handleChange}
                placeholder="Full Description"
                required
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none h-28"
            />

            <input
                name="price"
                value={data.price}
                onChange={handleChange}
                placeholder="Price"
                type="number"
                required
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <input
                name="image"
                value={data.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <select
                name="products_priority"
                value={data.products_priority}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-green-500 transition">
                <option value="">Select Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg w-full
                           font-medium transition shadow-md">
                Add Product
            </button>
        </form>
    );
}
