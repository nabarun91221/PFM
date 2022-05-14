import React from "react";
import "./login.css"
import bg from '../../img/bg.jpg';
import { motion } from 'framer-motion';
function Register({loginToggle}) {
    return (
        <motion.div className="login_container" animate={{backgroundImage:`url(${bg})`}}>
            <div className="popup_login" >
                <div className="popup_inner_login" >
                    <div className="sigh_in" >
                        <h1>Sigh In</h1>

                    </div>

                    <form action="/login" >
                        <input className="input" id="name" type="text" placeholder="User Name" required />
                        <input className="input" id="Email" type="email" placeholder="Email" required />
                        <input className="input" type="password" placeholder="Password" required />
                        <input className="input" type="password" placeholder="Confirm Password" required />
                        <button type="submit" >Sigh in</button>

                    </form>

                    <div className="Sigh_Up_now" onClick={loginToggle}>
                        <h1>Already have an account? login </h1>
                    </div>
                </div>

            </div>


        </motion.div>
    )
}

export default Register;