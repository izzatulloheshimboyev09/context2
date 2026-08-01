import React from "react";
import MainLayoute from "./layoutes/MainLayoute";
import PhotoDetail from "./Pages/PhotoDetail";
import GalleryPage from "./Pages/GalleryPage";
import LinkedPage from "./Pages/LinkedPage";
import DowloadedPage from "./Pages/DowloadedPage";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoute />,
    children: [
      {
        index: true,
        element: <GalleryPage />,
      },
      {
        path: "photo/:id",
        element: <PhotoDetail />,
      },
      {
        path: "download",
        element: <DowloadedPage />,
      },
      {
        path: "liked",
        element: <LinkedPage />,
      },
    ],
  },
]);
