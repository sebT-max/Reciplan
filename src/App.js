import React, { Fragment } from 'react'
import Footer from './components/Footer'
import './App.css';
import recipes from './images/recipesboard.jpg'
import Form from "./components/Form";
import Welcome from "./components/Welcome";
import Login from './components/Firebase/Login';
import SignUp from './components/Firebase/Signup';
import Landing from './components/Landing';
import AddRecipes from './containers/AddRecipes';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import logo from './images/logo.png';



function App() {
  
  const bgImage = {
    backgroundImage:`url(${recipes})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:800
  }
  const menu = window.innerWidth < 900 ? (
    <Menu />)
     : 
     (
        ""
     )
     ;
  const logoPosition={
  height:100,
  margin: "0 auto"
  }    

    
  return ( 
    <Fragment>
     <Router>
     <div className="header-container">
            {menu}
        <img src={logo} style={logoPosition}/>
        <div id="form-2">
          <Form />
        </div>
        
        
      </div>
      <div className="Appli" style={bgImage}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/myrecipes" element={<AddRecipes/>} />
              
        </Routes>  
      </div>   
      <Footer />

    </Router>
  </Fragment> 
  )
}

export default App;
