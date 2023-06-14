import React, { useState } from 'react';
import './App.css';

import ContentfulContent from './ContentfulContent';
import DummyTextSwe from './DummyTextSwe';
import DummyTextEng from './DummyTextEng';

const App = () => {
  const [isRendered, setIsRendered] = useState(false);
  const [isRenderedSwe, setIsRenderedSwe] = useState(false);
  const [isRenderedEng, setIsRenderedEng] = useState(false);

  const handleButtonClickEng = () => {
    setIsRenderedEng(true);
    setIsRenderedSwe(false);
  };

  const handleButtonClickSwe = () => {
    setIsRenderedSwe(true);
    setIsRenderedEng(false);
  };

  const handleButtonClick = () => {
    setIsRendered(true);
  };

  return (
    <div>

      <button onClick={handleButtonClick} className="render-contentful">
        Click To Render Contentful Data
      </button>
      {isRendered && <ContentfulContent />}
      <div className="flag-buttons">
        <button onClick={handleButtonClickSwe} id="render-dummy">
          <span>&#127480;&#127466;</span>
        </button>
        
        <button onClick={handleButtonClickEng} id="render-dummy">
          <span>&#127482;&#127480;</span>
        </button>
        {isRenderedSwe && <DummyTextSwe />}
        {isRenderedEng && <DummyTextEng />}
        
      </div>
    </div>
  );
};

export default App;
