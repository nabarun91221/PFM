import "./login.css"
import bg from '../../img/bg.jpg';
import { motion } from 'framer-motion';
import Register from "./register";
import { useState, React } from "react";
import { Link } from "react-router-dom";
import userAuth from "../../Data/data/userAuthData";
const Login = ({ loginToggle }) => {
    const setUserLogin = () => {
        userAuth.isAuth = true;
    }
    return (
        <motion.div className="login_container" animate={{backgroundImage:`url(${bg})`}}>
            <div className="popup_login" >
                <div className="popup_inner_login" >
                    <div className="sigh_in" >
                        <h1>Log In</h1>

                    </div>

                    <form action="/Home" >

                        <input className="input" id="Email" type="email" placeholder="Email" required />

                        <input className="input" type="password" placeholder="Password" required />
                        <Link to="/dashboard">
                            <button type="submit" onClick={setUserLogin}>log in</button>
                        </Link>

                    </form>

                    <div className="Sigh_Up_now">
                        <h1 onClick={loginToggle}>New here? Sigh Up now </h1>
                    </div>
                </div>

            </div>


        </motion.div>
    )
}

export default Login;