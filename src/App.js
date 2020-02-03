import React from 'react';
import './App.css';
import { Provider } from 'react-redux'; 
 import  store from './store.js'; 

import BookForm from './components/BookForm'; 
 import Books from './components/Books';
import NavBar from './components/NavBar'; 
import Reviews from './components/Reviews';
import Home from './components/Home'; 
import About from './components/About'; 
import Footer from './components/Footer'; 
import ReviewForm from './components/ReviewForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Divider } from 'semantic-ui-react'; 



 

function App() {
  
  // componentDidMount() {
  //   this.props.getBooks(); 
  // }
  return (
    <div>
      <Provider store={store}> 
      <Router>
      <div className="App">
    <NavBar /> 

    <h3>BOOK HAVEN</h3>
    <BookForm /> 
    <hr /> 
    <ReviewForm /> 

    <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/books" component={Books} />
                <Route path="/reviews" component={Reviews} /> 
                <Route path="/about" component={About}/> 
    </Switch> 

    <Divider />

    <Footer /> 



    </div>

      </Router>
      </Provider> 
    </div>

  
    
    
    
  );
}

export default App;
