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
            console.log("restauUpdate: " +this.props.name +"\n" +this.state.address + "\n" + this.state.description + "\n" + this.state.category);
            return(
                <UpdateRestaurant
                    restaurantId={this.props.restaurantId}
                    name={this.props.name}
                    address={this.props.address}
                    description={this.props.description}
                    category={this.props.category}
                    usersIdFk={this.props.usersIdFk}>
                </UpdateRestaurant>
            );
        }
        return (
            <button onClick={() => {this.setState({update: true,
                restaurantId: this.props.restaurantId,
                usersIdFk: this.props.usersIdFk})
            }}>Update</button>
        );

    }

} export default RestauUpdate;