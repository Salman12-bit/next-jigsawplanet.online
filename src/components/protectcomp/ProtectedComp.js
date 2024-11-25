// components/ProtectedComp.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProtectedComp = ({ children }) => {
    const router = useRouter();
    const auth = typeof window !== 'undefined' ? localStorage.getItem("key") : null;

    useEffect(() => {
        if (!auth) {
            router.push('/login'); // Redirect to login if not authenticated
        }
    }, [auth, router]);

    return auth ? <>{children}</> : null;
};

export default ProtectedComp;
