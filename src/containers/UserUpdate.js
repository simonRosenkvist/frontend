import React from 'react';
import UserForm from '../components/UserForm';
import {Redirect} from "react-router-dom";
import axios from "axios";

class userUpdateForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            header: "Update user",
            usersId: this.props.userStuff.usersId,
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


        let apiUrl = 'http://restau-back.herokuapp.com/api/user/update';
        let restUpdate = {
            "usersId": this.state.usersId,
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password,
            "role": this.state.role
        }
        const parent = this;
        axios.post(apiUrl, restUpdate)
            .then(function (response) {
                if (response.data === 200){
                    console.log(response.data);
                    parent.props.onRoleChanged(restUpdate);
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

    handleChange = (event) => {
        this.setState({
             role: event.target.value
        });
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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

export default userUpdateForm;
