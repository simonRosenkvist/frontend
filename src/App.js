import React from 'react';
import './App.css';
import Sec from './Sec.js';
import SearchBar from './SearchBar';
import Container from './Container.js';

class App extends React.Component {


  renderMain() {
    return (
      <Container/>
      )
  }

  render() {
    return (
      <div className="App">
          <SearchBar/>
          {this.renderMain()}
      
      </div>
    );
}
}
export default App;
