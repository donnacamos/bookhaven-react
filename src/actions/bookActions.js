import { FETCH_BOOKS, NEW_BOOK } from './types';

export const fetchBooks = () => dispatch => {
        fetch('http://localhost:3001/api/v1/books') 
          .then(res => res.json())
          .then(books => 
            dispatch({
              type: FETCH_BOOKS, 
              payload: books 
          })
        );   

}

export const createBook = (bookData) => dispatch => {
    console.log('book saved'); 
    fetch('http://localhost:3001',  {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookData)
    })
      .then(res => res.json())
      .then(book => 
         dispatch({
        type: NEW_BOOK, 
        payload: book  
    })
    
    ); 

}; 