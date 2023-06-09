import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import ProtectRouter from "./pages/ProtectRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, pathh: "/", element: <Home /> },
            { path: "/products", element: <AllProducts /> },
            {
                path: "/products/new",
                element: (
                    <ProtectRouter requireAdmin>
                        <NewProduct />
                    </ProtectRouter>
                ),
            },
            { path: "/products/:id", element: <ProductDetail /> },
            {
                path: "/carts",
                element: (
                    <ProtectRouter>
                        <MyCart />
                    </ProtectRouter>
                ),
            },
        ],
    },
]);

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </QueryClientProvider>
);
