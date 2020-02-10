import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from '../components/Books'; 
import PropTypes from 'prop-types';
import { fetchBooks } from '../actions/bookActions'


// finish Container components and get form to render with stars 
class BooksContainer extends Component {
    constructor() {
        super()

        this.state = {
            books: []
        }; 
    }

    componentDidMount() {
        this.props.fetchBooks(); 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newBook) {
            this.props.books.unshift(nextProps.newBook); 
        }
    }

    

    render() {
        
        return <Books books={this.props.books} />; 
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

 export default connect(mapStateToProps, { fetchBooks } )(BooksContainer); 

