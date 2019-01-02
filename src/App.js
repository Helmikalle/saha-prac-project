import React, { Component } from 'react';
import Header from './components/Header';
import PageLayout from './components/PageLayout';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header className="Header"/>  
        <div className="App">
          <PageLayout />
        </div>
      </div>
    );
  }
}

export default App;
