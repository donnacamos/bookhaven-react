import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { createReview } from '../actions/reviewActions'; 
import Rating from './Rating'; 


 class ReviewForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
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
            body: this.state.body 
        }

       this.props.createReview(review) 
    }

    render() {
        return (
            <div>
               
                <br /> 
               <h4>Add A Review</h4> 
               <form onSubmit={this.onSubmit}>
                   <Rating /> 
                   <div>
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