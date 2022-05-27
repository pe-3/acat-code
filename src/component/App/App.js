import React from 'react';
import './App.css';
import TopBar  from '../else/TopBar/TopBar';
import Router from '../else/Router/Router';
class App extends React.Component {
  render() {
      return (
          <div id='App'>
              <TopBar />
              <Router />
          </div>
      )
  }
}

export default App;
