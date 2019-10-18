import React from 'react';
import UserForm from '../components/UserForm';

class userUpdateForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            header: "Update user",
            username: "",
            password: "",
            email: "",
            role: "",
            error: "none"
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
        this.setState({
            error: ""
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
