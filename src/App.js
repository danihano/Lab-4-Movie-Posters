import React, {Component} from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Content from './Components/content';
import Read from './Components/read';
import Create from './Components/create';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
        </Nav>
      </Navbar>

      
      <Switch>
        <Route exact path="/" component={Content}/>
        <Route path="/read" component={Read}/>
        <Route path="/create" component={Create}/>
      </Switch>
{/* 
        <Header></Header>
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <Footer></Footer> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
