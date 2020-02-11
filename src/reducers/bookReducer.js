import { FETCH_BOOKS, ADD_BOOK } from '../actions/types'; 

const initialState = {
    items: [], 
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_BOOKS: 
          return {
              ...state, 
              items: action.payload 
          };
          case ADD_BOOK: 
          return {
            ...state, 
            item: action.payload 
        };
        default: 
          return state; 
    }
}