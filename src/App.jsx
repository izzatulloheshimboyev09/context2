import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import PhotoDetail from "./pages/PhotoDetail";
import MainLayout from "./layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <GalleryPage />,
      },
      {
        path: "/:id",
        element: <PhotoDetail />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
