import React, {useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import BooksContext from "../context/BooksContext";
import Loginsignup from "../components/Loginsignup";
import { useSelector } from "react-redux";


const AppRoutes = () => {
  const navigate = useNavigate();
  const {isLoggedin , userInfo} = useSelector((state) => state);

  useEffect(() => {
    if(isLoggedin && (localStorage.getItem('Jwt'))) {
      navigate('/header');
    } else {
      navigate('/');
    } 
  }, [isLoggedin]);

  // console.log(isLoggedin , userInfo);

  return (
    <Routes>
      <Route element={<BooksList />} path="/list" />
      <Route element={<AddBook />} path="/add" />
      <Route element={<EditBook />} path="/edit/:id" />
      <Route element={<Loginsignup />} path="/" />
      <Route element={<Header />} path="/header" />
      <Route element={<Navigate to="/" />} />
    </Routes>
  )
};


function AppRouter() {
  const [books, setBooks] = useLocalStorage("books", []);
  
  return (
    <div className="main-content">
      <BooksContext.Provider value={{ books, setBooks }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </BooksContext.Provider>
    </div>
  );
}

export default AppRouter;
