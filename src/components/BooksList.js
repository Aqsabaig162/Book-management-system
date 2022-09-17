import React, {useContext} from 'react'
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';
import Header from './Header';


function BooksList() {

const {books, setBooks} = useContext(BooksContext);   //Taking out the books and setBooks props from the BooksContext using the useContext hook.

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <Header />
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  )
}

export default BooksList