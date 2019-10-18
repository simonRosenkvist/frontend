import React from 'react';
import LoginForm from '../components/LoginForm';
import {Redirect} from "react-router-dom"
import axios from "axios";

class loginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.state = {
            header: "Log in",
            username: "",
            password: "",
            error: "none",
            finished: false
        }
    }

    doLogin(event){
        event.preventDefault();

        let apiUrl = 'http://restau-back.herokuapp.com/api/user/login';
        axios.post(apiUrl, this.state)
            .then(function (response) {
                if (response.data === 1 || response.data === 2){
                    this.props.onRoleChanged(response.data);
                    this.setState({
                        finished: true
                    });
                } else {
                    this.setState({
                        error: ""
                    });
                }
            });
    }

    handleSubmit(event){
        event.preventDefault();

        // do stuff on click
        console.log(this.state.username);
        console.log(this.state.password);


        let apiUrl = 'http://restau-back.herokuapp.com/api/user/login';
        const parent = this;
        axios.post(apiUrl, this.state)
            .then(function (response) {
                if (response.data === 1 || response.data === 2){
                    console.log(response.data);
                    parent.props.onRoleChanged(response.data, parent.state.username);
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

    onChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        if(this.state.finished){
            return (
                <Redirect to="/"/>
            )
        }

        return (
            <LoginForm
                header={this.state.header}
                username={this.state.username}
                password={this.state.password}
                error={this.state.error}
                onChange={this.onChange}
                handleSubmit={(e) => this.handleSubmit(e)}
            >
            </LoginForm>
        )
    }

};

export default loginForm;
