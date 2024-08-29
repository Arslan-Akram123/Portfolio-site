import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from "./Components/Layout/Layout.jsx";
import Login from "./Components/Login/Longin.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import ContactUs from "./Components/Contact/Contactus.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
