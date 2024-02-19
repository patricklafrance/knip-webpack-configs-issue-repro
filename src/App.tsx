import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Home.tsx";

const router = createBrowserRouter([
    {
        index: true,
        element: <Home />
    }
]);

export function App() {
    return (
        <RouterProvider
            router={router}
            fallbackElement={<div>Loading...</div>}
        />
    );
}
