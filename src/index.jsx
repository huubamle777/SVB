import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import '@/assets/ccs/bootstrap.min.css';
import '@/assets/ccs/style.css';
import { RouterProvider } from 'react-router';
import router from '@/router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Analytics />
    </React.StrictMode>
);
