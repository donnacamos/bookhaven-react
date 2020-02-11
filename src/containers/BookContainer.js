import React from 'react';
 import { Provider} from 'react-redux';
import {Route, Switch, Router } from 'react-router-dom';
// import {addBook} from '../actions/addBook';
import BookInput from '../components/BookInput';
import NavBar from '../components/NavBar';


 import  store from '../store.js'; 

import BooksContainer from '../containers/BooksContainer'; 
import About from '../components/About'; 
import Footer from '../components/Footer'; 
import { Divider } from 'semantic-ui-react'; 

class BookContainer extends React.Component {

  componentDidMount() {
    this.props.addBook()
  }

  render() {
    return (
        <Provider store={store}>
        <div>
          
        <NavBar />  
        <Router>
        <Switch>
                    <Route exact path="/" component={BookInput}/>  
                    <Route path="/books" component={BooksContainer} /> 
                    <Route path="/about" component={About}/> 
        </Switch> 
        </Router>
    
        <Divider />
    
        <Footer /> 
    
        </div>
        </Provider>
    
      
        
        
        
      );
  }
}

// const mapStateToProps = state => {
//   return {
//     book: state.book 
//   }
// }

export default BookContainer; 