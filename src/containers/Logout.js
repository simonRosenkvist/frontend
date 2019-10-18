import React from 'react';
import LogoutForm from '../components/LoginForm';
import {Redirect} from "react-router-dom"
import axios from "axios";

class loginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.state = {
            header: "Log out",
            username: "",
            password: "",
            error: "none",
            finished: false
        }
    }

    doLogin(event){
        event.preventDefault();
        const parent = this;
        let apiUrl = 'http://restau-back.herokuapp.com/api/user/logout/' + parent.state.username;
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

    handleSubmit(event){
        event.preventDefault();

        // do stuff on click
        console.log(this.state.username);
        console.log(this.state.password);


        const parent = this;
        let apiUrl = 'http://restau-back.herokuapp.com/api/user/logout/' + parent.state.username;
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
            <LogoutForm
                header={this.state.header}
                error={this.state.error}
                onChange={this.onChange}
                handleSubmit={(e) => this.handleSubmit(e)}
            >
            </LogoutForm>
        )
    }

};

export default loginForm;
