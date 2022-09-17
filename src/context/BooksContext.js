import React from "react";

const BooksContext = React.createContext({
    books: [],
    setBooks: (books) => {}
});

export default BooksContext