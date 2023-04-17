import React, { Fragment } from 'react'
import AddRecipes from './containers/AddRecipes'
import SearchRecipes from './containers/SearchRecipes'
import Footer from './components/Footer'
import './App.css';
import recipes from './images/recipesboard.jpg'
import logo from './images/logo.png'
import Form from "./components/Form";
import Menu from "./components/Menu";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const logoPosition={
    height:100,
    margin: "0 auto"
  }
  const bgImage = {
    backgroundImage:`url(${recipes})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  }


  const smartPhoneOrOtherDevices = window.innerWidth < 900 ?
(
  <Fragment>
     <Router>
      <Menu />
      <div className="header-container">
        <img src={logo} style={logoPosition}/>
        <Form />
      </div>
   
      <div className="Appli" style={bgImage}>
        <Routes>
          <Route path="/" element={<SearchRecipes/>} />
          <Route path='/myrecipes' element={<AddRecipes />} />    
        </Routes>  
      </div>   
      <Footer />

    </Router>
  </Fragment>
)
:
(
  <Fragment>
    <div>
        <div className="header-container">
          <img src={logo} style={logoPosition}/>
          <Form />
        </div>
        <div className="d-flex Web" style={bgImage}>
          <SearchRecipes />      
          <AddRecipes /> 
        </div>
    </div>
    <Footer />
    
  </Fragment>
)
console.log(smartPhoneOrOtherDevices)

    
  return ( 
<div>{smartPhoneOrOtherDevices}</div>

    
  )
}

export default App;
