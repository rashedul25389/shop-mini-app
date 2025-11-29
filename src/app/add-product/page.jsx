'use client';
import AddProductForm from '@/components/AddProductForm';

export default function AddProduct() {
    return (
        <div className="max-w-3xl mx-auto text-center mt-15">
            <h2 className="text-white font-bold text-2xl">Add New Product</h2>
            <AddProductForm></AddProductForm>
        </div>
    );
}
