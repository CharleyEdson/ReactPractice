import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext)


    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    // this is to change edit featuer to false after a submission.
    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>;
    }

  return <div className="book-show">
    <div>{content}</div>
    <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
    <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
    </div>
    </div>;
}

export default BookShow;
