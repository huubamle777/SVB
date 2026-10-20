import { createBrowserRouter } from 'react-router';
import Home from '@/pages/home';
import Verify from '@/pages/Verify';
import NotFound from '@/pages/not-found';

export const PATHS = {
    INDEX: '/',
    HOME: '/home',
    VERIFY: '/verify'
};

const router = createBrowserRouter([
    {
        path: PATHS.INDEX,
        element: <Home />
    },
    {
        path: PATHS.HOME,
        element: <Home />
    },
    {
        path: PATHS.VERIFY,
        element: <Verify />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
