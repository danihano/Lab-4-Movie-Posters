import React, {Component} from 'react';
import '../App.css';

class Content extends React.Component{
  render(){
    return (
      <div className="App">
        <Header></Header>
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <Footer></Footer>
      </div>
    );
  }
}

export default Content;