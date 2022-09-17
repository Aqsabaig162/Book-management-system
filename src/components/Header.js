import React from 'react';
import { Link  } from 'react-router-dom';
import Loginsignup from './Loginsignup';
function Header() {
 
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <Link to="/list" className="link" activeclassname="active" >
          Books List
        </Link>
        <Link  to="/add" className="link" activeclassname="active">
          Add Book
        </Link>
        <Link to="/" className="link" activeclassname="active" >
        SignOut
        </Link><Link to="/header" className="link" activeclassname="active" >
       
        </Link>
       
      </div>
     
    </header>
  )
}

export default Header