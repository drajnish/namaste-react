import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';

const Instamart = lazy(() => import('./components/Instamart'));

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:restaurantId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback=<Shimmer />>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter} />);

export default AppLayout;
