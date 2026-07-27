import React, { useState } from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { imagesData } from "../data/gallery";

import Navbar from "../components/Navbar";
import Input from "../components/Input";

function GalleryPage() {
  const [sliceCount, setSliceCount] = useState(10);
  const [search, setSearch] = useState("");

  const filteredImages = imagesData.filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <main>
      <Navbar />
      <Input search={search} setSearch={setSearch} />
      <div className="align-center">
        <ResponsiveMasonry>
          <Masonry>
            {filteredImages &&
              filteredImages.slice(0, sliceCount).map((img, index) => {
                return (
                  <Link
                    key={index}
                    to={`/${img.id}`}
                    className="block transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg overflow-hidden"
                  >
                    <img src={img.src} alt={img.title} />
                  </Link>
                );
              })}
          </Masonry>
        </ResponsiveMasonry>

        {filteredImages.length === 0 && (
          <p className="text-center text-gray-500 my-8">
            Hech qanday rasm topilmadi.
          </p>
        )}

        <button
          onClick={() => {
            setSliceCount(sliceCount + 10);
          }}
          className="border rounded-2xl bg-blue-700 text-white w-full py-3 m-3 cursor-pointer"
        >
          Read more
        </button>
      </div>
    </main>
  );
}

export default GalleryPage;
