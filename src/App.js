import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from './Container.js';
import DisplaySearch from './DisplaySearch.js';
import SearchBar from './SearchBar.js';
import Sec from './Sec.js';
import {BrowserRouter as Router, Switch, Route, Link}  from "react-router-dom";
import Navclass from "./Navclass";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 0,
            searchData: []

        }
    }

    handleRole(newRole) {
        this.setState({
            role: newRole
        });
    }


    renderSection() {
        return (
            <Sec
                value={1}
            />

        );
    }


    render() {
        return(

                <Navclass
                />

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

} export default App;
