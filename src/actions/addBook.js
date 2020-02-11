import { ADD_BOOK } from './types';

export const addBook = (bookData) => dispatch => {
    console.log('book saved'); 
    fetch('http://localhost:3001',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(bookData)
    })
      .then(res => res.json())
      .then(bookData => 
         dispatch({
        type: ADD_BOOK, 
        payload: bookData   
    })
    
    ); 

}; 