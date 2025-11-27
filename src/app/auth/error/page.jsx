export default function AuthErrorPage({ searchParams }) {
    const error = searchParams?.error || 'Authentication Failed';

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow text-center">
                <h1 className="text-2xl font-bold text-red-600">
                    Authentication Error
                </h1>
                <p className="mt-3 text-gray-700">{error}</p>
            </div>
        </div>
    );
}
