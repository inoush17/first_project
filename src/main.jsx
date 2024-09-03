import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from './Pages/Registration/Registration.jsx';
import OtpCode from './Pages/OtpCode/OtpCode.jsx';
import Dashbaord from './Pages/Dashbaord/Dashbaord.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/registration",
    element: <Registration />,
  },

  {
    path: "/otp-code/:email/",
    element: <OtpCode />,
  },

  {
    path: "/dashboard",
    element: <Dashbaord />,
  },
  
  {
    path: "/logout",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
