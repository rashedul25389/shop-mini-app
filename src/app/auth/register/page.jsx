'use client';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { AuthContext } from '@/Context/AuthProviders';

export default function RegisterPage() {
    const { register, loginWithGoogle } = useContext(AuthContext);
    const router = useRouter();
    const [form, setForm] = useState({ email: '', password: '', name: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await register(form.email, form.password);
            router.push('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
                    Create an Account
                </h2>

                {error && (
                    <p className="text-red-600 mb-3 font-semibold">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* FULL NAME */}
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        className="border border-gray-400 p-3 w-full rounded-lg text-gray-900 placeholder-gray-500 
                        focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />

                    {/* EMAIL */}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className="border border-gray-400 p-3 w-full rounded-lg text-gray-900 placeholder-gray-500 
                        focus:outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />

                    {/* PASSWORD */}
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={form.password}
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                            className="border border-gray-400 p-3 w-full rounded-lg pr-10
                            text-gray-900 placeholder-gray-500
                            focus:outline-none focus:ring-2 focus:ring-green-600"
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600">
                            {showPassword ? (
                                <AiOutlineEyeInvisible size={22} />
                            ) : (
                                <AiOutlineEye size={22} />
                            )}
                        </span>
                    </div>

                    {/* REGISTER BUTTON */}
                    <button className="bg-green-600 text-white font-semibold w-full p-3 rounded-lg hover:bg-green-700 transition">
                        Register
                    </button>
                </form>

                {/* GOOGLE LOGIN */}
                <button
                    onClick={() =>
                        loginWithGoogle().then(() => router.push('/dashboard'))
                    }
                    className="mt-5 w-full p-3 border border-gray-400 rounded-lg 
                    flex items-center justify-center gap-3 hover:bg-gray-100 transition text-gray-900">
                    <FcGoogle size={24} />
                    <span className="font-semibold">Continue with Google</span>
                </button>

                <p className="text-center mt-5 text-gray-700">
                    Already have an account?{' '}
                    <Link
                        href="/auth/login"
                        className="text-green-600 font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
