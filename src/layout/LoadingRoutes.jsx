import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Loading from '../components/Loading';


const LoadingRoutes = ({children}) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const loadingTime = setTimeout(() => {
            setLoading(false);
        }, 400);

        return () => clearTimeout(loadingTime);
    }, [location]);
    return (
        <>
            {loading ?
                <Loading /> :
                children 
            }

        </>
    );
};

export default LoadingRoutes;