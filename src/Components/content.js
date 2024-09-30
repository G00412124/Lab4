import React from 'react';

const Content = () => { //this is a functional component named Content that returns a div with two headings
  return ( //this is the return statement that returns the JSX code
    <div> 
      <h1>Hello World!</h1>  
      <h2>It is {new Date().toLocaleTimeString()}</h2> 
    </div>
  );
}

export default Content; //this exports the Content component so it can be imported in other files

