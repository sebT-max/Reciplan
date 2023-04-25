import {Link} from 'react-router-dom'; 
import React, { useState } from 'react';


function Menu() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed)
  };

  const barreau = isNavCollapsed ? <span>X</span>:<span className="navbar-toggler-icon"></span>
     
  const displayMenu = window.innerWidth = 900 ?
  (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/welcome">Search for a recipe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myrecipes">My recipes</Link>
        </li>
    </ul>
    </div>
  )
  :
  (
    ""
  )

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">  </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {barreau}

        </button>
          {displayMenu}
    </nav>
  );
}

export default Menu;