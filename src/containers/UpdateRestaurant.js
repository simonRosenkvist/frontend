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
            finished: false
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
            "usersId_fk": { "usersId": this.props.usersId_fk}
        }
        const parent = this;
        console.log(restUpdate);
        axios.post(apiUrl, restUpdate)
            .then(function (response){
                console.log(response.data);
                if(response.data === 200){
                    parent.setState({
                        finished: true
                    });
                } else if (response.data === 403){
                    console.log("update FAIL");
                    parent.setState({
                        error: ""
                    });
                }
        });
    }

    onChange = (e) => {
        e.preventDefault();
        console.log("onchange");
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
        console.log("updateRest"+this.state.name +"\n" +this.state.address + "\n" + this.state.description + "\n" + this.state.category);
        return(
            <NewRestaurantForm
                header={this.state.header}
                error={this.state.error}
                onChange={this.onChange}
                handleSubmit={(e) => this.handleSubmit(e)}
            >
            </NewRestaurantForm>
        );
    }
} export default UpdateRestaurant;