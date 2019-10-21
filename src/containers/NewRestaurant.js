import React from 'react';
import {Redirect} from "react-router-dom";
import NewRestaurantForm from '../components/NewRestaurantForm';
import axios from "axios";

class newRestaurant extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            finished: false,
            header: "Add New Restaurant",
            name: "",
            address: "",
            description: "",
            category: "",
            usersIdFk: "",
            error: "none"
        }
    }

    handleSubmit(event){
        event.preventDefault();

        // do stuff with it
        console.log(this.state.name);
        console.log(this.state.address);
        console.log(this.state.description);
        console.log(this.state.category);

        // sets error label to be visible

        let restUpdate = {
            "name": this.state.name,
            "description": this.state.description,
            "category": this.state.category,
            "usersIdFk": { "usersId": 12} // hardcoded until we get the user object
        }

        console.log(restUpdate);

        let apiUrl = 'http://restau-back.herokuapp.com/api/restaurant/create';
        const parent = this;
        axios.post(apiUrl, restUpdate)
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

    onChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    
    render(){
        if(this.state.finished){
            return (
                <Redirect to="/"/>
            );
        }
        return (
            <NewRestaurantForm
                header={this.state.header}
                name={this.state.name}
                address={this.state.address}
                description={this.state.description}
                category={this.state.category}
                error={this.state.error}
                onChange={this.onChange}
                handleSubmit={(e) => this.handleSubmit(e)}
            >
            </NewRestaurantForm>
        )
    }

};

export default newRestaurant;
