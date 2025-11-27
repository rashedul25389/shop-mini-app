'use client';
import { useState } from 'react';
import PrivateRoute from '@/Context/PrivateRoute';
import AddProductForm from '@/components/AddProductForm';
import ManageProducts from '@/components/ManageProducts';

export default function DashboardPage() {
    const [tab, setTab] = useState('add');

    return (
        <PrivateRoute>
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

                {/* Tabs */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setTab('add')}
                        className={`px-4 py-2 rounded ${
                            tab === 'add'
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}>
                        Add Product
                    </button>
                    <button
                        onClick={() => setTab('manage')}
                        className={`px-4 py-2 rounded ${
                            tab === 'manage'
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}>
                        Manage Products
                    </button>
                </div>

                {/* Tab content */}
                {tab === 'add' && <AddProductForm />}
                {tab === 'manage' && <ManageProducts />}
            </div>
        </PrivateRoute>
    );
}
