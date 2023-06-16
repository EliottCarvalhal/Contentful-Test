import React from 'react';
import './App.css';

const MainText = () => {
  
    return (

    <div className='main' style={{position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    
    <span style={{fontSize:'22px', marginLeft:'35%'}}>
        FLOWSCAPE SOLUTIONS
    </span>

    <p style={{fontSize:'55px',fontWeight:'bold'}}>
        One-Stop Shop for Your Hybrid Office
    </p>

    <div style={{paddingLeft:'100px',fontSize:'20px', maxWidth:'750px', wordBreak:'break-word', textAlign:'center'}}>
        Flowscape's comprehensive solutions offer everything your business needs to streamline and enhance your hybrid office.
    </div>

  </div>
    );
  };
  
  export default MainText;