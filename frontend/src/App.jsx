import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Checkout from "./pages/Checkout/Checkout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { NotFound } from "./pages/NotFound/NotFound";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    const existingProductIndex = savedCart.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...savedCart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...savedCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));

    const updatedCart = savedCart.filter((product) => product.id !== productId);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  };

  // Main Layout
  const MainLayout = () => {
    return (
      <div className="main">
        <Navbar size={cart.length} />
        <Outlet />
        <Footer />
      </div>
    );
  };

  // Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home addToCart={addToCart} />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/shop",
          element: <Shop addToCart={addToCart} />,
        },
        {
          path: "/cart",
          element: <Cart cart={cart} removeFromCart={removeFromCart} />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/category/:slug",
          element: <Category />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct addToCart={addToCart} />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
