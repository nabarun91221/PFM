import "./nav.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Nav = ({navHandeler, navState}) => {
    return (
      <motion.nav animate={navState ? { y: [0, -100] } : { y: [-100, 0] }}>
          <a className="home" href="/">
          <h2>PersonalF.M</h2>
         </a>
        <Link to="/dashboard">
          <h4 className="pageList rightOne">Dashboard</h4>
        </Link>
        <Link to="/expence">
          <h4 className="pageList rightOne">Expence</h4>
        </Link>
         <Link to="/loan">
          <h4 className="pageList rightOne">Loan</h4>
        </Link>
        <Link to="/reminder">
          <h4 className="pageList rightOne">Reminder</h4>
        </Link>
        <div className="manu" onClick={navHandeler}>
          {'\u2630'}
        </div>
       </motion.nav>
)
}
export default Nav;

 