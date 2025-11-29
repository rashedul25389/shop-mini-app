import './globals.css';
// import AuthProvider from '../Context/AuthProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthProvider from '@/Context/AuthProviders';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <AuthProvider>
                    <Navbar />
                    <div className="">
                        <main>{children}</main>
                    </div>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
