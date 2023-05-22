import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import { SobreMim } from "../pages/SobreMim";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <SobreMim />
    }
]);
