import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import PhotoDetail from "./pages/PhotoDetail";
import MainLayout from "./layouts/MainLayout";

import Home from "./public/Home";
import About from "./public/About";
import Contact from "./public/Contact";
import ErrorPage from "./public/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "/:id",
        element: <PhotoDetail />,
      },
    ],
  },

  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
