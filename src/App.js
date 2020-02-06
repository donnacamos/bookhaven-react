import React from 'react';
import './App.css';
import { Provider } from 'react-redux'; 
 import  store from './store.js'; 


 import Books from './components/Books';
import Navigation from './components/Navigation'; 
import Reviews from './components/Reviews';
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

// import React, {Component} from "react";
// import {Route, Router} from 'react-router-dom';

// import {Navigation} from './components/Navigation';
//  import {Footer} from './components/Footer'; 
//  import {Home} from './components/Home';


// class App extends Component {
//     render() {
//         return (
//             <div className="container-fluid">
//               <Router>
//                 <div className="row">
//                     <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
//                         <Navigation/>
//                         <div class="main-content-container container-fluid px-4">
//                             <Route  path="/" component={Home}  />
//                         </div>
//                         <Footer/>
//                     </main>
//                 </div>
//                 </Router>
//             </div>
//         );
//     }
// }

// export default App;