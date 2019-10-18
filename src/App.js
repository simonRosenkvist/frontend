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

} export default App;
