import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/Layout';
import Index from '../pages/Index';
import NuevoCliente from '../pages/NuevoCliente';
import ErrorPage from '../components/ErrorPage';
import EditarCliente from '../pages/EditarCliente';

export const router = createBrowserRouter([
     {
        path: '/',
        element: <Layout />,
        children: [
            {
               index: true,
               element: <Index />,
               errorElement: <ErrorPage />
            },
            {
               path: '/clientes/nuevo',
               element: <NuevoCliente />,
            },
            {
               path: '/clientes/:id/editar',
               element: <EditarCliente />
            }
        ]
     }
]);

