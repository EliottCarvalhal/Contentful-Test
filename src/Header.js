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

        <div className="flag-buttons" style={{display:'flex', marginLeft:'600px'}}>
        <button id="render-dummy">
          <span>&#127480;&#127466;</span>
        </button>

        <button id="render-dummy">
          <span>&#127482;&#127480;</span>
        </button>
        

      </div>
      
      </div>
    
      </div>
      </div>

      
    );
  };
  
  export default Header;