import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import theme from './theme';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import { Basket, Item } from './utilities';

const App = () => {
  const [basket, setBasket] = useState(new Basket());
  const [allProducts, setAllProducts] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          basket={basket}
          setBasket={setBasket}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      ),
    },
    {
      path: '/cart',
      element: (
        <Cart
          basket={basket}
          setBasket={setBasket}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      ),
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        basket={basket}
        setBasket={setBasket}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
