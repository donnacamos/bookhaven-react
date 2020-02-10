import React from 'react';
import Book from './Book'; 


  const Books = ({ books }) => (
            <div className="books"> 
               {/* <h1>Books</h1>  */}
              { books.map( book => 
              <Book title={book.title} 
                    author={book.author} 
                    genre={book.genre} 
                    review={book.review} 
                    key={book.id} 
                    /> )} 
                     
           
              
            </div>
        )
    

export default Books; 