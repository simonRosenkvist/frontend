import React from 'react';
import {Redirect} from "react-router-dom"
import axios from "axios";

class Logout extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            header: "Log out",
            username: '',
            error: "none",
            finished: false
        }
    }

    handleLogout(){

        const parent = this;
        let apiUrl = 'http://restau-back.herokuapp.com/api/user/logout/' + this.props.username;
        console.log(apiUrl);
        axios.post(apiUrl)
            .then(function (response) {
                if (response.data === 200){
                    console.log(response.data);
                    parent.props.onRoleChanged(0, '');
                    parent.setState({
                        finished: true
                    });
                } else {
                    console.log(response.data);
                    parent.setState({
                        error: ""
                    });
                }
            });

    }

    /*onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }*/

    render(){

        if(this.state.finished){
            return (
                <Redirect to="/"/>
            )
        }

        return (
            this.handleLogout(),
            null
        )

    }

};

export default Logout;
