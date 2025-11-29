import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
 
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Notfound from "./components/Notfound/Notfound.jsx";
import UserContextProvider from "../context/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartProvider from "../context/CartContext.jsx";
 import { Toaster } from "react-hot-toast";
import Authors from "./components/Authors/Authors.jsx";
import ReviewsPage from "./components/ReviewsPage/ReviewsPage.jsx";
import ReviewsProvider from "../context/ReviewContext.jsx";
import {FavoriteProvider}  from "../context/FavoriteContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: "cart", element: <Cart /> },
      { path: "favorites", element: <Favorites /> },
      { path: "authors", element: <Authors /> },
      { path: "reviews", element: <ReviewsPage /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <Notfound /> },
]);


 

function App() {
  return (
    <UserContextProvider>
      <ReviewsProvider>
        <FavoriteProvider>
        <CartProvider>
          <Toaster position="top-right" />
          <RouterProvider router={router} />
        </CartProvider>
        </FavoriteProvider>
      </ReviewsProvider>
    </UserContextProvider>
  );
}


export default App;
