import { createContext, useReducer } from "react";
import { imagesData } from "../data/gallery";

export const GalleryContext = createContext();
const initialData = imagesData.map((item) => ({
  ...item,
  liked: localStorage.getItem(`like-${item.id}`) === "true",
  downloaded: localStorage.getItem(`download-${item.id}`) === "true",
}));
function reducer(state, { type, payload }) {
  switch (type) {
    case "addlike":
      return state.map((item) => {
        if (item.id === payload) {
          const liked = !item.liked;

          if (liked) {
            localStorage.setItem(`like-${item.id}`, "true");
          } else {
            localStorage.removeItem(`like-${item.id}`);
          }

          return {
            ...item,
            liked,
          };
        }

        return item;
      });

    case "downloaded":
      return state.map((item) => {
        if (item.id === payload) {
          const downloaded = !item.downloaded;

          if (downloaded) {
            localStorage.setItem(`download-${item.id}`, "true");
          } else {
            localStorage.removeItem(`download-${item.id}`);
          }

          return {
            ...item,
            downloaded,
          };
        }

        return item;
      });

    default:
      return state;
  }
}

export function GlobalContextProvider({ children }) {
  const [galleryData, dispatch] = useReducer(reducer, initialData);

  return (
    <GalleryContext.Provider value={{ galleryData, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
}

export default GlobalContextProvider;
