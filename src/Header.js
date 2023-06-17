import React from 'react';
import Option from './Option'
import './App.css';
const Header = () => {
  
    return (
      <div>
   <div style={{ display: 'flex', marginLeft: '100px', }} className='navbar'>
      <div style = {{display : 'flex', marginTop : '30px', marginLeft : '275px'}}>

        <div className='listing'>
        <span>Solutions &nbsp;</span>
        <Option className = 'dropdown'>
        </Option>
        </div>

        <div className='listing'>
        <span>Products &nbsp;</span>
        <Option className = 'dropdown'>
        </Option>
        </div>

        <div className='listing'>
        <span>Price &nbsp;</span>
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