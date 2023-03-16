import SearchBar from "./Components/SearchBar";
import searchImages from "./api";
import axios from 'axios';
import ImageList from "./Components/ImageList";
import React, { useState } from 'react';




const App = () => {

    const [images, setImages] = useState([])


    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images} />
        </div>
      );
}
 
export default App;