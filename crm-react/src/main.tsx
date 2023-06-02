import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_API_URL
  }),
  cache: new InMemoryCache()
});

const query = gql`
  query {
    allClientes {
        id
        nombre
        telefono
        email
        empresa
    }
  }
`;

client.query({
  query
}).then(res => console.log(res.data)
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
