import React from 'react';
import {Redirect} from "react-router-dom";
import UserForm from '../components/UserForm';
import axios from "axios";

class signupForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            header: "Register",
            username: "",
            password: "",
            email: "",
            role: "",
            error: "none",
            finished: false
        }
    }

    handleSubmit(event){
        event.preventDefault();

        // do stuff with it
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.email);
        console.log(this.state.role);

        // sets error label to be visible
        /*this.setState({
            error: ""
        }); 
        console.log("from other page " + this.props.rolee);*/

        let apiUrl = 'http://restau-back.herokuapp.com/api/user/create';
        const parent = this;
        axios.post(apiUrl, this.state)
            .then(function (response) {
                if (response.data === 200){
                    console.log(response.data);
                    console.log("wohooo user created stuff")
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

    onChange = (event) => { 
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleChange = (event) => {
        this.setState({
            role: event.target.value
         });
    }

    render(){
        if(this.state.finished){
            return (
                <Redirect to="/"/>
            )
        }
        return (
            <UserForm
                header={this.state.header}
                username={this.state.username}
                password={this.state.password}
                email={this.state.email}
                role={this.state.role}
                error={this.state.error}
                onChange={this.onChange}
                handleChange={this.handleChange}
                handleSubmit={(e) => this.handleSubmit(e)}
            >
            </UserForm>
        )
    }

};

export default signupForm;
