import React, {Component} from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stripe checkout</h2>
          <Checkout />
        </header>    
     </div> 
     ); 
     }
   }
  
export default App;
