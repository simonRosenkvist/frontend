import React from 'react';
import axios from 'axios';
import { withCookies, Cookies, setCookie, getCookie, removeCookie } from 'react-cookie';



export default class LoginField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsrNameField = this.handleUsrNameField.bind(this);
        this.handlePasswdField = this.handlePasswdField.bind(this);
        this.login = this.login.bind(this);
    }


    handleUsrNameField(event){
        this.setState({username: event.target.value});
    }

    handlePasswdField(event){
        this.setState({password: event.target.value});
    }

    login(event){
        event.preventDefault();
        console.log("login function");
        //console.log(this.state);
        //let data = {username: this.state.username, password: this.state.password};
        //console.log(data);
        let apiUrl = 'http://restau-back.herokuapp.com/api/user/login';
        axios.post(apiUrl, this.state)
            .then(function (response) {
                //console.log(response.data);
                if(response.data === 1){
                    console.log("logged in as a user :D");
                    //TODO set a session or something since were now logged in.
                    // the number is our access_token :)
                    setCookie('login-cookie', response.data,{maxAge: 30*24*60*60, path: '/'});
                } else if(response.data === 2){
                    console.log("logged in as a owner")
                    //TODO set a session or something since were now logged in.
                } else {
                    console.log("wrong username or password")
                    //TODO: stuff when wrong credentials are used?
                }
        });


    }


    render() {
        return(
            <form id="loginForm" onSubmit={this.login}>
                <label> Username:
                    <input id="username" value={this.state.username} onChange={this.handleUsrNameField} placeholder="Username" type="text"></input>
                </label>
                <label> Password:
                    <input id="password" value={this.state.password} onChange={this.handlePasswdField} type="password"></input>
                </label>
                    <input id="loginBtn" value="Log in" type="button" type="submit"></input>
            </form>
        )
    }
}