import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import Select from '../components/Select';

class BookFormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
            title: '',
            author: '',
            genre: '',
            rating: [],
            review: '' 
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this); 
		this.handleRatingSelect = this.handleRatingSelect.bind(this);
		this.handleReviewChange = this.handleReviewChange.bind(this);
		
	}
	componentDidMount() {
		fetch('http://localhost:3001') 
			.then(res => res.json())
			.then(bookData => {
				this.setState({
					title: bookData.title,
                    author: bookData.author,
                    genre: bookData.genre,
                    rating: bookData.rating, 
                    review: bookData.review 
				});
			});
    }
    // start here 02/10/2020 
	handleTitleChange(e) {
		this.setState({ Title: e.target.value }, () => console.log('title:', this.state.Title)); 
    }
    
    handleAuthorChange(e) {
		this.setState({ Author: e.target.value }, () => console.log('author:', this.state.Author)); 
    }

    handleGenreChange(e) {
		this.setState({ Genre: e.target.value }, () => console.log('genre:', this.state.Genre));  
    }
    
	handleRatingSelect(e) {
		this.setState({ RatingSelection: e.target.value }, () => console.log('rating', this.state.RatingSelection));
    }
    
	handleReviewChange(e) {
		this.setState({ Review: e.target.value }, () => console.log('review:', this.state.Review));   
    }
	
	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			title: '',
			author: '',
			genre: '',
			ratingSelection: [],
			review: ''
	
		});
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			title: this.state.title,
			author: this.state.author,
			genre: this.state.genre,
			ratingSelection: this.state.ratingSelection,
			review: this.state.review
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}
	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h5>Book Form</h5>
				<SingleInput
					inputType={'text'}
					title={'Title'}
					name={'name'}
					controlFunc={this.titleChange}
					content={this.state.title} 
					placeholder={'Type title here'} /> 
                <SingleInput
					inputType={'text'}
					title={'Author'}
					name={'name'}
					controlFunc={this.authorChange}
					content={this.state.author} 
					placeholder={'Type author here'} /> 
                 <SingleInput
					inputType={'text'}
					title={'Genre'}
					name={'name'}
					controlFunc={this.genreChange}
					content={this.state.genre} 
					placeholder={'Type genre here'} /> 
				<Select
					name={'rating'}
					placeholder={'Choose your rating'}
					controlFunc={this.handleRating}
					options={this.state.rating}
					selectedOption={this.state.ratingSelection} />
				<TextArea
					title={'Review'}
					rows={5}
					resize={false}
					content={this.state.review}
					name={'review'}
					controlFunc={this.handleReviewChange}
					placeholder={'Please give a review of this book'} />
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
    return ({
      title: state.title,
      author: state.author,
      genre: state.genre, 
      rating: state.rating, 
      review: state.review 
     })
  }

export default connect(mapStateToProps)(BookFormContainer); 