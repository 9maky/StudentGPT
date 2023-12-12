import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
    createBrowserRouter,
    RouterProvider,
    Route,  
} from 'react-router-dom';
import Blog from './pages/blog.tsx';


const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'blog',
    element: <Blog/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'));
root.render(
  <RouterProvider router={router} />
);