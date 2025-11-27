'use client';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function AddProductForm() {
    const [data, setData] = useState({
        title: '',
        short_description: '',
        full_description: '',
        price: '',
        image: '',
        products_priority: '',
    });

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                'http://localhost:4000/products',
                data
            );

            // SUCCESS SweetAlert
            Swal.fire({
                title: 'Product Added!',
                text: 'Your product has been added successfully.',
                icon: 'success',
                background: '#ffffff',
                color: '#1a1a1a', 
                iconColor: '#16a34a', 
                confirmButtonColor: '#16a34a', 
                confirmButtonText: 'OK',
            });

            setData({
                title: '',
                short_description: '',
                full_description: '',
                price: '',
                image: '',
                products_priority: '',
            });
        } catch (err) {
            console.error(err);

            // ERROR SweetAlert
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add product.',
                icon: 'error',
                background: '#ffffff',
                color: '#1a1a1a',
                iconColor: '#dc2626',
                confirmButtonColor: '#dc2626',
                confirmButtonText: 'Close',
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white border border-gray-200 p-6 rounded-2xl shadow-lg max-w-3xl my-10">
            <input
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-500"
            />

            <input
                name="short_description"
                value={data.short_description}
                onChange={handleChange}
                placeholder="Short Description"
                required
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-500"
            />

            <textarea
                name="full_description"
                value={data.full_description}
                onChange={handleChange}
                placeholder="Full Description"
                required
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-500 h-28 resize-none"
            />

            <input
                name="price"
                value={data.price}
                onChange={handleChange}
                type="number"
                placeholder="Price"
                required
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-500"
            />

            <input
                name="image"
                value={data.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="border p-3 w-full rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-500"
            />

            <select
                name="products_priority"
                value={data.products_priority}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-500">
                <option value="">Select Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg w-full shadow">
                Add Product
            </button>
        </form>
    );
}
