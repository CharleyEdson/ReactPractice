import React, { useState } from 'react';


function BookEdit({book, onSubmit}) {

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('New title', title);
        // onEdit(book.id, title);
        //this is to make edit feature false. The above code was old way
        onSubmit(book.id, title);
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">
            Save
        </button>
    </form>
    ;
}
 
export default BookEdit;