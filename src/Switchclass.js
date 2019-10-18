import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginField from "./login";
//import UserState from "./UserState";

class Switchclass extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
    	let x = 0
        if (x === 1) {
            return (
                <Switch>
                    <Route path="/Review">
                        <Review />
                    </Route>
                    <Route path="/settings">
                        <UpdateUser />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            );
        } else if (x === 2) {
            return (
                <Switch>
                    <Route path="/addrestaurant">
                        <AddRestauRant />
                    </Route>
                    <Route path="/updaterestaurant">
                        <UpdateRestaurant />
                    </Route>
                    <Route path="/settings">
                        <UpdateUser />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            );
        
        } else {
            return (
                <Switch>
                    <Route path="/login">
                        <LoginField />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            );
        }
    }


}
function Home() {
    return <h2>Home</h2>;
}

function Review() {
    return <h2>Review</h2>;
}

function UpdateUser() {
    return <h2>UpdateUser</h2>;
}
function Logout() {
    return <h2>Logout</h2>;
}

function AddRestauRant() {
    return <h2>AddRestauRant</h2>;
}

function UpdateRestaurant() {
    return <h2>UpdateRestaurant</h2>;
}

function SignUp() {
    return <h2>SignUp</h2>;
}
export default Switchclass;