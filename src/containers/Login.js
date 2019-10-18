import React from 'react';
import LoginForm from '../components/LoginForm';
import {Redirect} from "react-router-dom"

class loginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            header: "Log in",
            username: "",
            password: "",
            error: "none",
            finished: false
        }
    }

    handleSubmit(event){
        event.preventDefault();

        // do stuff on click
        console.log(this.state.username);
        console.log(this.state.password);
    
        this.props.onRoleChanged(2);

        // sets error label to be visible
        this.setState({
            error: "",
            finished: true
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
