import { FETCH_BOOKS } from './types';

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

