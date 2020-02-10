import React from 'react'; 

const Book = ({ title, author, genre, review}) => (
  <div className="book">
    <h3>{ title }</h3>
    <h3>{ author }</h3>
    <h3>{ genre }</h3>
    <p>{ review }</p>
  </div>
)

export default Book; 