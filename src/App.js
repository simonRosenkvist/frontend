import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Sec from './Sec.js';
import {BrowserRouter as Router, Switch, Route, Link}  from "react-router-dom";
import Navclass from "./Navclass";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 0
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

        );
    }

    /*render() {
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to ="/">Home</Link>
                            </li>
                            <li>
                                <Link to ="/login">Login</Link>
                            </li>
                            <li>
                                <Link to ="/signUp">Sign up</Link>
                            </li>
                            <li>
                                <Link to ="/newRestaurant">New Restaurant</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/login">
                            <Login
                                role={this.state.role}
                                onRoleChanged={(role) => this.handleRole(role)}
                            >
                            </Login>
                        </Route>
                        <Route path="/signUp">
                            <SignUp
                                rolee={this.state.role}
                            >
                            </SignUp>
                        </Route>
                        <Route path="/newRestaurant">
                            <NewRestaurant>
                            </NewRestaurant>
                        </Route>

                        <Route path="/">

                            <div className="App">
                                <SearchBar/>

                                {this.renderMain()}

                            </div>

                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }*/
} export default App;
