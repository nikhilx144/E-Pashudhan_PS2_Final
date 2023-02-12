import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../styles/Singup.module.css";


function Signup() {
  const [data, setData] = useState({
		name: "",
		address: "",
		district: "",
		state: "",
		email: "",
		password: "",
	});


  const handleChange = (e) => {
    const {name,value} = e.target;


    setData((prev) => {
      return{
        ...prev,
        [name]: value,
      };
    });
};

// useEffect(() => {
//   console.log(data);
// },[data]);
const handleClick = (e) => {
  e.preventDefault();

  axios
  .post("/signup",data)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}


  return (
    <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1 style={{padding: `0`}}>Welcome</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
							style={{border: `none`, borderRadius: `10px`}}
						/>
						<input
							type="text"
							placeholder="Address"
							name="address"
							onChange={handleChange}
							value={data.address}
							required
							className={styles.input}
							style={{border: `none`, borderRadius: `10px`}}
						/>
            <input
							type="text"
							placeholder="District"
							name="district"
							onChange={handleChange}
							value={data.district}
							required
							className={styles.input}
							style={{border: `none`, borderRadius: `10px`}}
						/>
            <input
							type="text"
							placeholder="State"
							name="state"
							onChange={handleChange}
							value={data.state}
							required
							className={styles.input}
							style={{border: `none`, borderRadius: `10px`}}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
							style={{border: `none`, borderRadius: `10px`}}
						/>
						<input
							type="password"
							placeholder="Set Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn} onClick={handleClick} >
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
  );
};

export default Signup;