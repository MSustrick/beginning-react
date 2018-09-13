import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating'
class App extends Component {

  formatName(user){
    return user.firstName + ' ' + user.lastName
  }
  render() {

    const isValid=true;
    return (



      <div>
<Products />

<div>

<h3>Sample Ratings</h3>
<Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
</div>


      </div>
    );
  }



}

export default App;
