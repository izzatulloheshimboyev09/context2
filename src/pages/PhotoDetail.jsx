import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GalleryContext } from "../context/GlobalContext";
import Img from "../components/Img";
import { Link, useLocation } from "react-router-dom";
import { FaRegHeart, FaEye, FaHome } from "react-icons/fa";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

function PhotoDetail() {
  let location = useLocation();
  const { id } = useParams();

  const { galleryData } = useContext(GalleryContext);

  const findImage = galleryData.find((item) => item.id == id);

  if (!findImage) {
    return <h1>Rasm topilmadi</h1>;
  }

  return (
    <div className=" custom  max-w-5xl mx-auto p-5 flex flex-col items-center justify-center">
      <div className="relative rounded-xl overflow-hidden group w-200 flex mx-auto text-center">
        {/* Asosiy rasm */}
        <img
          src={findImage.src}
          alt={findImage.title}
          className="w-full rounded-xl"
        />

        {/* Hover iconlari */}
        <Img item={findImage} />
        <div className="absolute bottom-3 left-3">
          <button className="bg-white p-2 rounded-full hover:bg-gray-800 hover:text-white">
            {location.pathname.startsWith("/photo/") ? (
              <Link to="/">
                <FaHome />
              </Link>
            ) : (
              <Link to={`/photo/${item.id}`}>
                <FaEye />
              </Link>
            )}
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-5">{findImage.title}</h1>

      <p className="text-gray-500 mt-2">{findImage.author}</p>
    </div>
  );
}

export default PhotoDetail;
