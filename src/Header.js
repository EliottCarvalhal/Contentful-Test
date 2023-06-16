import React from 'react';
import Option from './Option'
import './App.css';
const Header = () => {
  
    return (
      <div>
   <div style={{ display: 'flex', marginLeft: '100px', }} className='navbar'>
      <div style = {{display : 'flex', marginTop : '30px', marginLeft : '275px'}}>

        <div className='listing'>
        <span>Solutions</span>
        <Option className = 'dropdown'>
        </Option>
        </div>

        <div className='listing'>
        <span>Products</span>
        <Option className = 'dropdown'>
        </Option>
        </div>

        <div className='listing'>
        <span>Price</span>
        <Option className = 'dropdown'>

        </Option>
        </div>

        <div>
          <span>
            ...
          </span>
        </div>


        
      
      </div>
    
      </div>
      </div>

      
    );
  };
  
  export default Header;