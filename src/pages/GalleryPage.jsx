import React from "react";

import { imagesData } from "../data/gallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

function GalleryPage() {
  const [sliceCount, setSliceCount] = useState(10);
  return (
    <main>
      <ResponsiveMasonry>
        <Masonry>
          {imagesData &&
            imagesData.slice(0, sliceCount).map((img, index) => {
              return <img key={index} src={img.src} alt="" />;
            })}
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
}

export default GalleryPage;
