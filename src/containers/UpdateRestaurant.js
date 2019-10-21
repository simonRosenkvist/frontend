import React from "react";
import {Redirect} from "react-router-dom";
import NewRestaurantForm from "../components/NewRestaurantForm";
import axios from "axios";

class UpdateRestaurant extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            header: "Update Restaurant",
            error: 'none',
            restaurantId: 0,
            name: '',
            address: '',
            description: '',
            category: '',
            usersId_fk: 0,
        }
    }

    handleSubmit(event){
        event.preventDefault();

        let apiUrl = 'http://restau-back.herokuapp.com/api/restaurant/update';
        let restUpdate = {
            "restaurantId": this.props.restaurantId,
            "name": this.state.name,
            "description": this.state.description,
            "category": this.state.category,
            "usersId_fk": this.props.usersId_fk
        }
        const parent = this;
        console.log(restUpdate);
        axios.post(apiUrl, restUpdate)
            .then(function (response){
                //do stuff
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

        return(
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
        );
    }
} export default UpdateRestaurant;