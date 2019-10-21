import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import NewRestaurant from "./containers/NewRestaurant";
import UserUpdate from "./containers/UserUpdate"
import SearchBar from "./SearchBar";
import ReviewForm from "./components/ReviewForm";
import Container from "./Container";
import Logout from "./containers/Logout";
import DisplaySearch from "./DisplaySearch";
import UpdateRestaurant from "./containers/UpdateRestaurant";


class Navclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 0,
            username: '',
            userId: 0,
            searchData: [],
            restaurant: []
        }
    }

    handleRole(newRole, name) {
        this.setState({
            role: newRole,
            username: name
        });
    }

    handleRestaurant(data){
        this.setState({
            restaurant: data
        })
    }



    handleSearch(data){
        this.setState({
            searchData: data
        })

    }

    render() {
        //let x = 1;
        if (this.state.role === 1) {
            return (
                <Router>
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
                                <UserUpdate
                                    username={this.state.username}
                                    role={this.state.role}
                                />
                            </Route>
                            <Route path="/logout">
                                <Logout
                                    username={this.state.username}
                                    onRoleChanged={(role, name) => this.handleRole(role, name)}
                                >
                                </Logout>
                            </Route>

                            <Route path="/">

                                <div className="App">
                                  <SearchBar
                                     mordekaiser={ (strebenkaiser) => this.handleSearch(strebenkaiser)}
                                  ></SearchBar>
                                  <Container/>

                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            );
        } else if (this.state.role === 2) {
            return (
                <Router>
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
                                <UpdateRestaurant/>
                            </Route>
                            <Route path="/settings">
                                <UserUpdate/>
                            </Route>
                            <Route path="/logout">
                                <Logout
                                    username={this.state.username}
                                    onRoleChanged={(role, name) => this.handleRole(role, name)}
                                >
                                </Logout>
                            </Route>


                            <Route path="/">

                                <div className="App">
                                        <SearchBar
                                     mordekaiser={ (strebenkaiser) => this.handleSearch(strebenkaiser)}
                                  ></SearchBar>
                                  <Container/>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            );
        } else if (this.state.role === 0) {
            return (
                <Router>
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
                                    onRoleChanged={(role, name) => this.handleRole(role, name)}
                                >
                                </Login>
                            </Route>
                            <Route path="/signup">
                                <SignUp
                                    rolee={this.state.role}
                                >
                                </SignUp>
                            </Route>

                    
                            <Route path="/DisplaySearch">
                                <SearchBar
                                     mordekaiser={ (strebenkaiser) => this.handleSearch(strebenkaiser)}
                                  ></SearchBar>
                                <DisplaySearch
                                    data={this.state.searchData}
                                >
                                </DisplaySearch>
                            </Route>


                            <Route path="/">

                                <div className="App">
                                    <SearchBar
                                     mordekaiser={ (strebenkaiser) => this.handleSearch(strebenkaiser)}
                                    >
                                    </SearchBar>
                                  <Container/>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>


            );
        }
    }
}

export default Navclass;