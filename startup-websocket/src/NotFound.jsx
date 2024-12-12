import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }, [navigate]);

    return <h1>Not Found. Redirecting Home...</h1>;
}

export default NotFound;