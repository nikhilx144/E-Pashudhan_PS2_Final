import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
// import * as BiIcons from "react-icons/bi";

export const NavbarItems = [
  {
    title: "Home",
    path: "/",
    cName: "nav-links",
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: "Health care",
    // path: "/healthcare",
    cName: "nav-links",
    icon: <GiIcons.GiHealthNormal />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Livestock",
        path: "/healthcare/livestock",
        cName: "nav-links",
        icon: <GiIcons.GiCow />,
      },
      {
        title: "Diseases",
        path: "/healthcare/diseases",
        cName: "nav-links",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Blogs",
    path: "/blogs",
    cName: "nav-links",
    icon: <FaIcons.FaBlog />,
  },
  {
    title: "Products",
    path: "/products",
    cName: "nav-links",
    icon: <FaIcons.FaProductHunt />,
  },
  {
    title: "About us",
    path: "/about",
    cName: "nav-links",
    icon: <AiIcons.AiFillInfoCircle />,
  },
  {
    title: "Contact us",
    path: "/contact",
    cName: "nav-links",
    icon: <FiIcons.FiPhoneCall />,
  },
];