import React from 'react';

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default ChildComponent;


//its visible that the "message" prop change a bit of color when done in a different way like in
//parent.js when being called. It seems that it still work the same although has different color.
//
//its literally inside the html box on jsx syntax after 'import react'