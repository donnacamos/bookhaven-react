import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';  

 class Books extends Component {
     componentDidMount() {
         this.props.fetchBooks(); 
     }

     componentWillReceiveProps(nextProps) {
         if (nextProps.newBook) {
             this.props.books.unshift(nextProps.newBook); 
         }
     }

    render() {
        const bookItems = this.props.books.map(book => (
            <div key={book.id}>
               <h3>{book.title}</h3>
               <h3>{book.author}</h3>
             </div> 
        ));
        return (
            <div>
              <h1>Books</h1> 
              {bookItems}  
            </div>
        )
    }
}

Books.propTypes = {
    fetchBooks: PropTypes.func.isRequired, 
    books: PropTypes.array.isRequired, 
    newBook: PropTypes.object
}

const mapStateToProps = state => ({
    books: state.books.items,
    newBook: state.books.item  
}); 

export default connect (mapStateToProps, { fetchBooks }) (Books); 