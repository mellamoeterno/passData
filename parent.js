import React from 'react';

class ParentComponent extends React.Component {
  render() {
    // Data to be passed to the child component
    const data = "Hello from Parent!";
    
    return (
      <div>
        <ChildComponent message={data} />
      </div>
    );
  }
}

export default ParentComponent;


//its visible that the "message" prop change a bit of color when done in a different way like in
//parent.js when being called. It seems that it still work the same although has different color.
//
//its literally inside the html box on jsx syntax after 'import react'