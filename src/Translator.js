import React, { useEffect } from 'react';

const Translator = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.gtranslateSettings = {
        "default_language": "en",
        "languages": ["en", "sv"],
        "wrapper_selector": ".gtranslate_wrapper",
        "switcher_horizontal_position": "right",
        "switcher_vertical_position": "top"
      };
    `;
    document.body.appendChild(script);

    const gtranslateScript = document.createElement('script');
    gtranslateScript.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    gtranslateScript.defer = true;
    document.body.appendChild(gtranslateScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(gtranslateScript);
    };
  }, []);

  return (
    <div className="gtranslate_wrapper"></div>
  );
};

export default Translator;
