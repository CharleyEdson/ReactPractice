import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const updatedBooks = [...books, { id: Math.round(Math.random()) * 9999, title: title }];

    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books}/>
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
};

export default App;
