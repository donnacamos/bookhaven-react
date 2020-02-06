import React from 'react';
import './App.css';
import { Provider } from 'react-redux'; 
 import  store from './store.js'; 


 import Books from './components/Books';
import Navigation from './components/Navigation'; 
import Home from './components/Home'; 
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
                <Route exact path="/" component={Home}/>
                <Route path="/books" component={Books} />
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


