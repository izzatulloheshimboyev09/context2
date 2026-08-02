import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { routes } from "./App.jsx";
import { GalleryContext } from "./context/GlobalContext.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <RouterProvider router={routes} />
  </GlobalContextProvider>,
);
