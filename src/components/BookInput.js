import React from 'react';
import {connect} from 'react-redux'
import {addBook} from '../actions/addBook' 

class BookInput extends React.Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }; 
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}); 
    }

    handleSubmit(event) {
        alert('A title was submitted: ' + this.state.title);
        event.preventDefault(); 
        this.props.addBook(this.state)
        this.setState({
            title: '' 
        })
        // create an addBook component
        // setState after 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={this.state.title} name="title" onChange={this.handleChange} /> 
                </label>
                <input type="submit" value="Submit" /> 
            </form>
        ); 
    }
}

export default connect(null, {addBook})(BookInput);  

