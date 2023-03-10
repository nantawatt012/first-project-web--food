import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticate from "../fratures/auth/redirectIfAuthen";
import RedirectIfNotAuthen from "../fratures/auth/redirectIfNotAuthen";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import OrderPage from "../pages/OrderPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
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
    path: "/shop/:shopId",
    element: <ShopPage />
  },
  {
    path: "/user",
    element: <UserPage />
  },
  {
    path: "/order/:userId",
    element: (
      <RedirectIfNotAuthen>
        <OrderPage />
      </RedirectIfNotAuthen>
    )
  },
  {
    path: "/orderHistory",
    element: (
      <RedirectIfNotAuthen>
        <OrderHistoryPage />
      </RedirectIfNotAuthen>
    )
  },
  {
    path: "/cart/:userId",
    element: <CartPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
