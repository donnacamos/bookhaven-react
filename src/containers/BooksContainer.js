import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from '../components/Books'; 
import PropTypes from 'prop-types';
import { fetchBooks } from '../actions/bookActions'; 

// finish Container components and get form to render with stars 
class BooksContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks(); 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newBook) {
            this.props.books.unshift(nextProps.newBook); 
        }
    }

     bookItems = () => this.props.books.map(book => (
       <div key={book.id}>
          <h3>{book.title}</h3>
          <h3>{book.author}</h3>
          <h3>{book.genre}</h3>
          <h3>{book.review}</h3>
        </div> 
   ));

    render() {
        //Destructure to extract data from objects into their own variable- ex: toy instead this.props.toy)
        const { books } = this.props;

        let sorted = books.sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
        
        return (
            <div className="Toys">

            <Divider />
            <Stats numToys={books.length} topThree={sorted.slice(0, 3)}/>
            <Divider />


            <strong>All Books</strong> 

                <Card.Group itemsPerRow={3}>

                    {books.map((toy, id) => <Books key={id} book={book} />)}
                </Card.Group>


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

 export default connect(mapStateToProps)(BooksContainer); 

