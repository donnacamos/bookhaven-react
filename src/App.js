import React from 'react';
import './App.css';
import { Provider } from 'react-redux'; 
 import  store from './store.js'; 

//import Book from './components/Book'; 
import BooksContainer from './containers/BooksContainer'; 
import Navigation from './components/Navigation'; 
import BookFormContainer from './containers/BookFormContainer';   
import About from './components/About'; 
import Footer from './components/Footer'; 
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
    <Navigation /> 

    <Switch>
                <Route exact path="/" component={BookFormContainer}/>  
                <Route path="/books" component={BooksContainer} /> 
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


