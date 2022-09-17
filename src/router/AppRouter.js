import React from 'react'
import { BrowserRouter, Routes, Route, Navigate,useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';
import Loginsignup from '../components/Loginsignup';
import Links from '../components/Links';


function AppRouter() {
  const [books, setBooks] = useLocalStorage('books', []);
 
  return (
    
    <BrowserRouter>
    
     
        <div className="main-content">
          <BooksContext.Provider value={{books,setBooks}}>
          <Routes>
            <Route element={<BooksList />} path= '/list' />
            <Route element={<AddBook  />} path="/add" />
            <Route element = { <EditBook /> } path="/edit/:id" />
            <Route element={<Loginsignup/>} path="/" />
            <Route element={<Header/>} path="/header" />
            <Route element={<Navigate to="/" />} />
          </Routes>
          </BooksContext.Provider>
        </div>
     
    </BrowserRouter>
  )
}

export default AppRouter