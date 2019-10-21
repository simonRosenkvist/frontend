import React from 'react';
import './App.css';
import UpdateRestaurant from "./containers/UpdateRestaurant";
import RestauUpdate from "./components/RestauUpdate";

export default class Sec extends React.Component {
    render() {
        return (
            <div className="sec">
                <h2>{this.props.name}</h2>
                <p>{this.props.address}</p>
                <h3>{this.props.description}</h3>
                <p>{this.props.category}</p>
                <p>Rating: {this.props.rating}</p>
                <RestauUpdate
                    restaurantId={this.props.restaurantId}
                    name={this.props.name}
                    address={this.props.address}
                    description={this.props.description}
                    category={this.props.category}
                    usersId_fk={this.props.usersId_fk}
                > </RestauUpdate>
            </div>
        )
    }
}