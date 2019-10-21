import React from "react";
import UpdateRestaurant from "../containers/UpdateRestaurant";

class RestauUpdate extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        update: false,
        restaurantId: 0,
        name: '',
        address: '',
        description: '',
        category: '',
        usersId_fk: 0,
        }

    }


    render () {
        if(this.state.update) {
            console.log("render: " + this.state.restaurantId);
            return(
                <UpdateRestaurant
                    restaurantId={this.state.restaurantId}
                    name={this.state.name}
                    address={this.state.address}
                    description={this.state.description}
                    category={this.state.category}
                    usersId_fk={this.props.usersId_fk}>
                </UpdateRestaurant>
            );
        }
        console.log("user: " + this.props.usersId_fk);
        return (
            <button onClick={() => {this.setState({update: true,
                restaurantId: this.props.restaurantId,
                usersId_fk: this.props.usersId_fk})
            }}>Update</button>
        );

    }
    
} export default RestauUpdate;