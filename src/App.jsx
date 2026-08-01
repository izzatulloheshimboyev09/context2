import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout & Pages
import MainLayout from "./layouts/MainLayoute";
import Home from "./public/Home";
import About from "./public/About";
import Contact from "./public/Contact";
import PhotoDetail from "./pages/PhotoDetail";
import LikedPage from "./pages/LikedPage";
import DownloadedPage from "./pages/DownloadedPage";
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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "liked",
        element: <LikedPage />,
      },
      {
        path: "downloaded",
        element: <DownloadedPage />,
      },
      {
        path: ":id",
        element: <PhotoDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
