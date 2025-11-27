'use client';
import { useContext, useEffect } from 'react';
// import { AuthContext } from './AuthProvider';
import { useRouter } from 'next/navigation';
import Loader from '../components/Loader';
import { AuthContext } from './AuthProviders';

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) router.replace('/login');
    }, [user, loading, router]);

    if (loading) return <Loader />;
    return user ? children : null;
}
