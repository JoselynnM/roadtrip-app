import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, theme } from '@chakra-ui/react'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './pages/About.tsx';
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Search from './pages/Search';



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
        path: "search",
        element:
        <React.StrictMode>
        <ChakraProvider theme={theme}>
          <Search />
        </ChakraProvider>
      </React.StrictMode>,
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
