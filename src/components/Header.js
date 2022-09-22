import React from "react";
import { Link } from "react-router-dom";
import { signout } from "../Redux/actions/signout";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const signoutt = async (e) => {
    
    e.preventDefault();
    localStorage.clear();
    auth.signOut();
    dispatch(signout());
  };
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <Link to="/list" className="link" activeclassname="active">
          Books List
        </Link>
        <Link to="/add" className="link" activeclassname="active">
          Add Book
        </Link>
        <Link
          to="/"
          className="link"
          activeclassname="active"
          onClick={(e) => signoutt(e)}
        >
          SignOut
        </Link>
        <Link to="/header" className="link" activeclassname="active"></Link>
      </div>
    </header>
  );
}

export default Header;
