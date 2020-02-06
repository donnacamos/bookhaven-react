import React from 'react'; 
import { Divider } from 'semantic-ui-react'; 

import BookForm from './BookForm';
 

const Home = () => {
   
        return (

            <div className="Home">
                <h3>BOOK HAVEN</h3>
                <BookForm /> 
                <hr />
                <Divider /> 
            
            </div>
        )
      }
    
export default Home; 
    