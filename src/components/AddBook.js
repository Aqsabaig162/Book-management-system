import React, {useContext} from 'react'
import BookForm from './BookForm';
import {useNavigate} from 'react-router-dom';
import BooksContext from '../context/BooksContext';
import Header from './Header';

function AddBook() {

    const {books , setBooks} = useContext(BooksContext);

    const navigate = useNavigate();
    const handleOnSubmit = (book) => {
        setBooks([book, ...books]);
        
         navigate('/list');
        
    }

    return (
        <React.Fragment>
             <Header />
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
}

export default AddBook