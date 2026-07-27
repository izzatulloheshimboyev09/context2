import React, { useState } from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { imagesData } from "../data/gallery";

import Navbar from "../components/Navbar";

function GalleryPage() {
  const [sliceCount, setSliceCount] = useState(10);

  return (
    <main className="align-center">
      <Navbar />
      <ResponsiveMasonry>
        <Masonry>
          {imagesData &&
            imagesData.slice(0, sliceCount).map((img, index) => {
              return (
                <Link
                  key={index}
                  to={`/${img.id}`}
                  className="block transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg overflow-hidden"
                >
                  <img src={img.src} alt="" />
                </Link>
              );
            })}
        </Masonry>
      </ResponsiveMasonry>

      <button
        onClick={() => {
          setSliceCount(sliceCount + 10);
        }}
        className="border rounded-2xl bg-blue-700 text-white w-full py-3 m-3"
      >
        Read more
      </button>
    </main>
  );
}

export default GalleryPage;
