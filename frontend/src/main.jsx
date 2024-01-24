import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './pages/About.tsx';
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Menu from './pages/Menu';


const router = createBrowserRouter([
 
  {
    path: "/",
    element: (
      <>
        <div className="xl:flex xl:flex-row">
         <App />
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <main >
            <div >
              <Home />
            </div>
          </main>
        ),
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "navbar",
        element: <Navbar />,
      },
      
    
    ],
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
