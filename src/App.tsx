import React from "react";
import HomePage from "./Pages/homePage";
import ShopPage from "./Pages/shopPage";
import BuyersPage from "./Pages/buyersPage";
import BlogPage from "./Pages/blogPage";
import ContactsPage from "./Pages/contactsPage";
import "./i18n";
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./Pages/product";

interface RouteConfig {
  path: string,
  element: React.ReactNode
  }
const routerConfig: RouteConfig[] = [
  {
    path: "/*",
    element: <HomePage />,
  },
  {
    path: "/shopPage",
    element: <ShopPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
  {
    path: "/buyersPage",
    element: <BuyersPage />,
  },
  {
    path: "/blogPage",
    element: <BlogPage />,
  },
  {
    path: "/contactsPage",
    element: <ContactsPage />,
  },
];
const router = createBrowserRouter(routerConfig)


export default router;
