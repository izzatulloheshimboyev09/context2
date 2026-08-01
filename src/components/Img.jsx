import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GalleryContext } from "../context/GlobalContext";
function Img({ item }) {
  const { dispatch } = useContext(GalleryContext);
  const key = `like-${item.id}`;

  function setToMemory() {
    console.log("bosildi");
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, "true");
    }

    dispatch({
      type: "addlike",
      payload: item.id,
    });
  }

  return (
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
      {/* Yuqori o'ng */}
      <div className="absolute top-3 right-3 flex gap-2">
        <button
          onClick={() => dispatch({ type: "addlike", payload: item.id })}
          className="text-3xl"
        >
          {item.liked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-white" />
          )}
        </button>
        <button
          onClick={() => dispatch({ type: "downloaded", payload: item.id })}
          className="bg-white p-2 rounded-full"
        >
          {item.downloaded ? (
            <MdOutlineDriveFolderUpload className="text-blue-500" />
          ) : (
            <MdOutlineDriveFolderUpload className="text-black" />
          )}
        </button>
      </div>

      {/* Past chap */}
      <div className="absolute bottom-3 left-3">
        <button className="bg-white p-2 rounded-full hover:bg-gray-800 hover:text-white">
          <Link to={`/photo/${item.id}`}>
            <FaEye />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Img;
