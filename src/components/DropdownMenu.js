import React, { useState } from "react";
import user from "../assets/avatar.png";
import "../styles/DropdownMenu.css";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    {
      title: "Profile",
      path: "/profile",
    },    {
      title: "Dashboard",
      path: "/dashboard",
    },    {
      title: "Login",
      path: "/login",
    },    {
      title: "Logout",
    },
  ]
  return (
    <div className="dropdown">
      <img onClick={()=>setOpen(!open)} src={user} alt="Profile" className="profile" />
      {open && (
        <div className="menutab">
          <ul>
            {Menus.map((item, index) =>{
              return (
                <li onClick={()=>setOpen(false)} key={index}>
                  <Link to={item.path}>
                    <div className="txt">
                      {item.title}
                    </div>
                  </Link>
                </li>
              ); 
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;