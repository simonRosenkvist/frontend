import React from 'react';
import axios from 'axios';


export default class LoginField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            userpasswd: ''
        }
        this.handleUsrNameField = this.handleUsrNameField.bind(this);
        this.handlePasswdField = this.handlePasswdField.bind(this);
        this.login = this.login.bind(this);
    }

    handleUsrNameField(event){
        this.setState({username: event.target.value});
    }

    handlePasswdField(event){
        this.setState({userpasswd: event.target.value});
    }



    login(event){
        event.preventDefault();
        console.log("login function")
        //const [username, setInput] = useState('');
        console.log(this.state.username + " " + this.state.userpasswd);
        console.log();
        let data = {username: this.state.username, password: this.state.userpasswd};
        //console.log(data);
        const test = new FormData(event.target);
        console.log(test);
        let apiUrl = 'http://restau-back.herokuapp.com/api/user/login';
        axios.post(apiUrl, test)
            .then(function (response) {
                console.log(response.data);
                if(response.data === 1){
                    console.log("logged in :D");
                } else if(response.data === 2){

                } else {
                    console.log("wrong username or password")
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
                    <input id="usrpasswd" value={this.state.userpasswd} onChange={this.handlePasswdField} type="password"></input>
                </label>
                    <input id="loginBtn" value="Log in" type="button" type="submit"></input>
            </form>
        )
    }
}