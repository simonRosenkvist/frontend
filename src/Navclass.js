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
            searchData: [],
            restaurant: [],
            userStuff: []
        }
    }

    handleRole(data) {
        this.setState({
            userStuff: data
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
        if (this.state.userStuff.role === 1) {
            console.log(this.state.userStuff);
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
                                    userStuff={this.state.userStuff}
                                    onRoleChanged={(data) => this.handleRole(data)}
                                />
                            </Route>
                            <Route path="/logout">
                                <Logout
                                    userStuff={this.state.userStuff}
                                >
                                </Logout>
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
                                      userStuff={this.state.userStuff}
                                      mordekaiser={ (strebenkaiser) => this.handleSearch(strebenkaiser)}
                                  ></SearchBar>
                                  <Container/>

                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            );
        } else if (this.state.userStuff.role === 2) {
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
                                <NewRestaurant
                                    userStuff={this.state.userStuff}
                                    //onRestauChanged={(data) => this.handleRestaurant(data)}
                                />
                            </Route>
                            <Route path="/updaterestaurant">
                                <UpdateRestaurant
                                    userStuff={this.state.userStuff}
                                    //onRestauChanged={(data) => this.handleRestaurant(data)}
                                />
                            </Route>
                            <Route path="/settings">
                                <UserUpdate
                                    userStuff={this.state.userStuff}
                                    onRoleChanged={(data) => this.handleRole(data)}
                                />
                            </Route>
                            <Route path="/logout">
                                <Logout
                                    userStuff={this.state.userStuff}
                                >
                                </Logout>
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
                                            userStuff={this.state.userStuff}
                                            mordekaiser={ (strebenkaiser) => this.handleSearch(strebenkaiser)}
                                  ></SearchBar>
                                  <Container/>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            );
        } else {
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
                                    onRoleChanged={(data) => this.handleRole(data)}
                                >
                                </Login>
                            </Route>
                            <Route path="/signup">
                                <SignUp
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