import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { createBook } from '../actions/bookActions'; 
 class BookForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
             title: '',
             author: ''
         };

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }
      
     onChange(e) {
         this.setState({[e.target.name]: e.target.value})
     }

    onSubmit(e) {
        e.preventDefault();

        const book = {
            title: this.state.title, 
            author: this.state.author
        }

       this.props.createBook(book) 
    }

    render() {
        return (
            <div>
               <h1>Add Books</h1> 
               <form onSubmit={this.onSubmit}>
                   <div>
                       <label>Title: </label><br />
                       <input type="text" name="title" onChange={this.onChange} 
                       value={this.state.title} />
                   </div>
                   <div>
                       <label>Author: </label><br />
                       <input type="text" name="author" onChange={this.onChange}
                        value={this.state.author} />
                   </div>
                   <br />
                   <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}

BookForm.propTypes = {
    createBook: PropTypes.func.isRequired 
}

export default connect(null, { createBook })(BookForm);  
