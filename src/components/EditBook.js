import React, {useContext} from 'react';
import BookForm from './BookForm';
import { useParams,  useNavigate } from 'react-router-dom';
import BooksContext from '../context/BooksContext';
import Header from './Header';

function EditBook() {
    let navigate = useNavigate();
        const {books,setBooks} = useContext(BooksContext);
        const { id } = useParams();
        const bookToEdit = books.find((book) => book.id === id);
      
        const handleOnSubmit = (book) => {
          const filteredBooks = books.filter((book) => book.id !== id);
          setBooks([book, ...filteredBooks]);
          navigate('/list');
        };
    

  return (
    <div>
       <Header />
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditBook