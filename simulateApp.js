import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './ParentComponent';

ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);


//its visible that the "message" prop change a bit of color when done in a different way like in
//parent.js when being called. It seems that it still work the same although has different color.
//
//its literally inside the html box on jsx syntax after 'import react'