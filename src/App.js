import React from 'react';
import './App.css';
import Container from './Container.js';
import DisplaySearch from './DisplaySearch.js';
import SearchBar from './SearchBar.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: []
    }
  }


  renderMain() {
    return (
      <Container
      />
      )
  }

  handleSearch(data) {
    this.setState({
      searchData:data
    })
  }

  render() {
    return (

      <Router>

        <div>
          <SearchBar
             mordekaiser={ (strebenkaiser) => this.handleSearch(strebenkaiser)}
          ></SearchBar>
          <Switch>
            <Route path="/DisplaySearch">

              <DisplaySearch
                data={this.state.searchData}
              >
              </DisplaySearch>
            </Route>

            <Route path='/'>

              <div className="App">
                
                {this.renderMain()}
              </div>
            
            </Route>
          </Switch>    
        </div>
        </Router>
      
    );
}
}
export default App;
