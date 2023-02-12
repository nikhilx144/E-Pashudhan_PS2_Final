import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarItems } from "./NavbarItems";
import SubMenu from "./SubMenu";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";
// import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import DropdownMenu from "./DropdownMenu";

const Nav = styled.div`
  background: #2196f3;
  height: 60px;
  width: 100% ;
  display: flex;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavbarNav = styled.nav`
  background: #2196f3;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  padding-top: 30px;
  top: 0;
  left: ${({ navbar }) => (navbar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const NavbarWrap = styled.div`
  width: 100%;
`;
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);
  // // login
  // const { loginWithRedirect } = useAuth0();
  // // logout
  // const { logout } = useAuth0();
  // // Authentication
  // const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <IconContext.Provider value={{ color: "#ffff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showNavbar} />
          </NavIcon>
          <NavLink to="/" className='app__navbar-logo'>
          <img  className="logopng" src={logo} alt="logo" />
          </NavLink>
          
          <div id="flex"/>
          
          <div className="app__navbar-login">
            {/* {isAuthenticated && (
              <div onClick={() => logout({ returnTo: window.location.origin })}>
                <p>{user.name}</p>
              </div>
            )} */}
            {/* {isAuthenticated ? ( */}
                <div >
                  <DropdownMenu />
                </div>
            {/* ) : (
                <button onClick={() => loginWithRedirect()}>
                  Log In
                </button> */}
            {/* )} */}
          </div>
        </Nav>
        <NavbarNav navbar={navbar}>
          <NavbarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showNavbar} />
            </NavIcon>
            {NavbarItems.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </NavbarWrap>
        </NavbarNav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;