import React, { Component, useState } from 'react';

interface DataType {
  
 data:string[]
 
}


class TEST3 extends Component<{}, DataType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data:[]


    };
  }
  

  

  // Function to handle the click event and push data to the array
  handleClick = () => {
    // Create a copy of the current data array
    const newData = [...this.state.data];

    // Push new data to the array (for example, a new item)
    newData.push('New Data'); // Replace 'New Data' with your actual data

    // Update the state with the new data array
    this.setState({ data: newData });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add Data</button>
        <ul>
          {this.state.data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TEST3;
