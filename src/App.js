// import { Button } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Main from "./components/Main";
// import signup from "./components/Signup";
// import Login from "./components/Login";
import "./styles/App.css";
import BannerImage from './assets/milk.jpg';
import { Link } from "react-router-dom";
// import {
//   Healthcare,
//   Livestock,
//   Diseases,
//   Cure,
// } from "../src/components/Healthcare";

function App() {
	return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1 className="heading">E- Pashudhan</h1>
        <p> WE BELIEVE IN QUALITY </p>
        <Link to="/about">
          <button>  
            KNOW MORE
          </button>
        </Link>
      </div>
    </div>
		// <div className="App">
    //   <center><h1>HOME</h1>
    //   <button className="btn btn-primary" onClick={() => navigate("signup")}>SignUp</button>
    //   </center>
    // </div>
	);
}

export default App; 