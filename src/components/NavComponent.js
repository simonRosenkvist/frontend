import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import NewRestaurant from "../containers/NewRestaurant";
//import UserUpdate from "../containers/UserUpdate"
import UserUpdate from '../containers/UserUpdate';
import SearchBar from "../SearchBar";
//import ReviewForm from "./ReviewForm";
import ReviewForm from "./ReviewForm";


class NavComponent extends React.Component {
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


    render() {
        let x = 1;
        if (x === 1) {
            return (
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/review">Review</Link>
                            </li>
                            <li>
                                <Link to="/settings">Settings</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/Review">
                            <ReviewForm/>
                        </Route>
                        <Route path="/settings">
                            <UserUpdate/>
                        </Route>
                        <Route path="/logout">
                            <Login/>
                        </Route>

                        <div className="App">
                            <SearchBar/>

                            {this.renderMain()}

                        </div>
                    </Switch>
                </div>
            );
        } else if (x === 2) {
            return (
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/addrestaurant">Add a restaurant</Link>
                            </li>
                            <li>
                                <Link to="/updaterestaurant">Restaurant settings</Link>
                            </li>
                            <li>
                                <Link to="/settings">Settings</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/addrestaurant">
                            <NewRestaurant/>
                        </Route>
                        <Route path="/updaterestaurant">
                            <UserUpdate/>
                        </Route>
                        <Route path="/settings">
                            <UserUpdate/>
                        </Route>
                        <Route path="/logout">
                            <Login/>
                        </Route>

                        <div className="App">
                            <SearchBar/>

                            {this.renderMain()}

                        </div>
                    </Switch>
                </div>
            );
        } else {
            return (
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
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
                        <Route path="/signup">
                            <SignUp
                                rolee={this.state.role}
                            >
                            </SignUp>
                        </Route>
                        <Route path="/">

                            <div className="App">
                                <SearchBar/>

                                {this.renderMain()}

                            </div>
                        </Route>
                    </Switch>
                </div>


            );
        }
    }
}

export default NavComponent;