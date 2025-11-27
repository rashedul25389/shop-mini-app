'use client';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/Context/AuthProviders';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const { login, loginWithGoogle } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            router.push('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            router.push('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md border border-gray-200">
                {/* Title */}
                <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
                    Login
                </h2>

                {/* Error */}
                {error && (
                    <p className="text-red-600 mb-3 text-center bg-red-100 py-2 rounded font-medium">
                        {error}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500
                        focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-400 rounded-lg bg-white text-gray-900 placeholder-gray-500
                        focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 
                        transition font-semibold">
                        Login
                    </button>
                </form>

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full mt-5 border border-gray-400 py-3 rounded-lg flex justify-center items-center gap-3
                    hover:bg-gray-100 transition font-semibold text-gray-900 bg-white">
                    <FcGoogle size={24} />
                    Continue with Google
                </button>

                {/* Go To Register */}
                <p className="text-center mt-5 text-gray-700 font-medium">
                    Don't have an account?{' '}
                    <Link
                        href="/auth/register"
                        className="text-green-600 font-semibold">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
}
