import { createBrowserRouter } from "react-router-dom";

// Layout & Pages
import MainLayout from "./layouts/MainLayoute";
import Home from "./public/Home";
import About from "./public/About";
import Contact from "./public/Contact";
import PhotoDetail from "./pages/PhotoDetail";
import LinkedPage from "./pages/LinkedPage";
import DownloadedPage from "./pages/DownloadedPage";
import ErrorPage from "./public/ErrorPage";

export const routes = createBrowserRouter([
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
        element: <LinkedPage />,
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
