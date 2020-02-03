import { FETCH_REVIEWS, NEW_REVIEW } from './types';

export const fetchReviews = () => dispatch => {
        fetch('http://localhost:3001/api/v1/reviews')  
          .then(res => res.json())
          .then(reviews => 
            dispatch({
              type: FETCH_REVIEWS, 
              payload: reviews 
          })
        );   

}

export const createReview = (reviewData) => dispatch => { 
    fetch('http://localhost:3001/api/v1/review',  {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviewData)
    })
      .then(res => res.json())
      .then(review => 
         dispatch({
        type: NEW_REVIEW, 
        payload: review 
    })
    
    ); 

}; 