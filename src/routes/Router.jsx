import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    element: <LoginPage />
  },
  {
    path: "/shop",
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
    path: "/register",
    element: <RegisterPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
