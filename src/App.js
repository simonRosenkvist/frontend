/*import React from 'react';
import './App.css';
import Sec from './Sec.js';
import SearchBar from './SearchBar';
import Container from './Container.js';
import LoginField from "./login";
import { withCookies, Cookies, setCookie } from 'react-cookie';


class App extends React.Component {

renderSection() {
    return (
      <Sec
        value={1}
    />

    );
  }

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
export default withCookies(App);*/

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Navclass from './Navclass';
import Switchclass from "./Switchclass";

export default function App() {
    return (
        <Router>
            <div>
                <Navclass/>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switchclass />
            </div>
        </Router>
    );
}

