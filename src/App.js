
import './App.css';
import userAuth from './Data/data/userAuthData';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/login/login.js';
import Register from './pages/login/register';
import Nav from './components/nav';
import { motion } from 'framer-motion';
import Expence from './pages/Expence/expence';
import Loan from './pages/Loan/loan';
function App() {
  const [login, setlogin] = useState(true);
  const loginToggle = () => {
    setlogin(!login);
  }
  

  return (
    <motion.div className="App">
      <Router>

        <Nav></Nav>
       <Routes>
        <Route exact path='/' element={!userAuth.isAuth?login? <Login loginToggle={loginToggle}></Login>:<Register loginToggle={loginToggle} ></Register>:<></>}></Route>
          
          <Route exact path='/dashboard' element={
            userAuth.isAuth?
              <></>:<Link to="/">Please Login first</Link>
              
          }></Route>
          <Route exact path='/expence' element={<Expence />}></Route>
          <Route exact path='/loan' element={<Loan/>}></Route>
       {/*<Route exact path='/cards/:id' element={<DashBoard />}></Route> */}
       </Routes>
        </Router>
      </motion.div>
    );

}

export default App;
