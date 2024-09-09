import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {  RouterProvider } from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Router/AuthProvider.jsx';


createRoot(document.getElementById("root")).render(
   <AuthProvider>
      <StrictMode>
         <RouterProvider router={router} />
      </StrictMode>
   </AuthProvider>
);
