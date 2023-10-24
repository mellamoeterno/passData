import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './ParentComponent';

ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);


// all comes to using the message 'prop' but for everything To make this work, you need to render the 
//ParentComponent in your application. This typically happens in your application's entry 
//point (e.g., index.js or App.js). jsx, being specifically in this case the simulateApp.js file.