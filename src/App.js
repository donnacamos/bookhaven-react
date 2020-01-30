import React from 'react';
import './App.css';
import { Provider } from 'react-redux'; 
import  store from './store.js'; 

import BookForm from './components/BookForm'; 
import Books from './components/Books';


 

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
      <BookForm /> 
      <hr /> 
      <Books />
    </div>
    </Provider>
  );
}

export default App;
