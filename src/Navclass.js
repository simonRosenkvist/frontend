import React from "react";
import {Link} from "react-router-dom";
import UserState from "./UserState";

class Navclass extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let x = 1;
        if (x === 1) {
            return (
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
            );
        } else if (x === 2) {
            return (
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
            );
        } else {
            return (
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
            );
        }
    }
}

export default Navclass;