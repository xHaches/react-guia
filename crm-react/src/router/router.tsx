import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/Layout';
import Index from '../pages/Index';
import NuevoCliente from '../pages/NuevoCliente';

export const router = createBrowserRouter([
     {
        path: '/',
        element: <Layout />,
        children: [
            {
               index: true,
               element: <Index />
            },
            {
               path: '/clientes/nuevo',
               element: <NuevoCliente />,
            }
        ]
     }
]);

