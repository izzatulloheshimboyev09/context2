import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { imagesData } from "../data/gallery";

function PhotoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const photo = imagesData.find((item) => item.id === Number(id));

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <button></button>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-8 h-screen">
          <img
            src={photo?.src}
            alt={photo?.title}
            className="max-h-[75vh] w-auto object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoDetail;
