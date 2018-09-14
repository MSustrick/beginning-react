import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import Github from './GitHub';
import GitHub from './GitHub';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Note Github api is chapter   7 */}
        <GitHub/>

        {/* <UserForm/>  */}
      </div>
    );
  }
}

export default App;
