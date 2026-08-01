import React from "react";
import { useContext, useState } from "react";
import { GalleryContext } from "../context/GlobalContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Img from "../components/Img";

import Input from "../components/Input";
function DowloadedPage() {
  let { galleryData } = useContext(GalleryContext);
  console.log(galleryData);

  const [photoCount, setPhotoCount] = useState(10);
  const [search, setSearch] = useState("");

  function searchImages(value) {
    setSearch(value);
  }

  const filteredImages = galleryData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const initialData = galleryData.map((item) => ({
    ...item,
    liked: localStorage.getItem(`like-${item.id}`) === "true",
    downloaded: localStorage.getItem(`download-${item.id}`) === "true",
  }));

  return (
    <>
      <Input searchImages={searchImages} />

      <main className="custom py-5">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {filteredImages.slice(0, photoCount).map((item, index) => {
              if (item.downloaded) {
                return (
                  <div
                    key={item.id}
                    className="relative overflow-hidden rounded-xl shadow-lg group"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto block object-cover"
                    />

                    <Img index={index} item={item} />
                  </div>
                );
              }
            })}
          </Masonry>
        </ResponsiveMasonry>

        <div className="mt-8">
          <button
            onClick={() => setPhotoCount((prev) => prev + 10)}
            className="w-full bg-blue-900 text-white border rounded-2xl py-3 hover:bg-blue-800 transition"
          >
            Load More
          </button>
        </div>
      </main>
    </>
  );
}

export default DowloadedPage;
