import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { createReview } from '../actions/reviewActions'; 


 class ReviewForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
             title: '',
             body: '' 
         };

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }
      
     onChange(e) {
         this.setState({[e.target.name]: e.target.value})
     }

    onSubmit(e) {
        e.preventDefault();

        const review = {
            title: this.state.title, 
            body: this.state.body 
        }

       this.props.createReview(review) 
    }

    render() {
        return (
            <div>
               
                <br /> 
               <h3>Add A Review</h3> 
               <form onSubmit={this.onSubmit}>
                   <div>
                       <label>Title: </label><br /> 
                       <input type="text" name="title" onChange={this.onChange} 
                       value={this.state.title} />
                   </div> 
                   <div>
                       <label>Body: </label><br /> 
                       <textarea type="text" name="body" onChange={this.onChange}
                        value={this.state.body} />
                   </div>
                   <br />
                   <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}

ReviewForm.propTypes = {
    createForm: PropTypes.func.isRequired 
}

export default connect(null, { createReview })(ReviewForm);  