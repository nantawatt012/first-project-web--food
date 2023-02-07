import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticate from "../fratures/auth/redirectIfAuthen";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OrderPage from "../pages/OrderPage";
import RegisterPage from "../pages/RegisterPage";
import ShopPage from "../pages/ShopPage";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/shop/:userId",
    element: <ShopPage />
  },
  {
    path: "/user",
    element: <UserPage />
  },
  {
    path: "/order",
    element: <OrderPage />
  },
  {
    path: "/cart",
    element: <CartPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}