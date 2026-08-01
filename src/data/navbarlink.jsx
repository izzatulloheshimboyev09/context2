import { FaHome, FaDownload, FaHeart } from "react-icons/fa";
export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: <FaHome size={18} />,
  },
  {
    name: "Downloaded",
    path: "/download",
    icon: <FaDownload size={18} />,
  },
  {
    name: "Liked",
    path: "/liked",
    icon: <FaHeart size={18} />,
  },
];
