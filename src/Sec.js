import React from 'react';
import './App.css';
import UpdateRestaurant from "./containers/UpdateRestaurant";
import RestauUpdate from "./components/RestauUpdate";

export default class Sec extends React.Component {
    render() {
        console.log(this.props.role);
        if (this.props.role === 1) {
            return (
                <div className="sec">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.address}</p>
                    <h3>{this.props.description}</h3>
                    <p>{this.props.category}</p>
                    <p>Rating: {this.props.rating}</p>
                    <iframe 
                      title="map"
                      width="270" 
                      height="270" 
                      id="gmap_canvas" 
                      src={"https://maps.google.com/maps?q="+ this.props.address +"&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                      frameBorder="0" 
                      scrolling="no" 
                      marginHeight="0" 
                      marginWidth="0">
                    </iframe>
                    
                    <RestauUpdate
                        restaurantId={this.props.restaurantId}
                        name={this.props.name}
                        address={this.props.address}
                        description={this.props.description}
                        category={this.props.category}
                        usersIdFk={this.props.usersIdFk}
                    > </RestauUpdate>
                </div>
            );
        }
        if (this.props.role === 2) {
            return (
                <div className="sec">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.address}</p>
                    <h3>{this.props.description}</h3>
                    <p>{this.props.category}</p>
                    <p>Rating: {this.props.rating}</p>
              <iframe 
                            title="map"
                            width="270" 
                            height="270" 
                            id="gmap_canvas" 
                            src={"https://maps.google.com/maps?q="+ this.props.address +"&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0">
                        </iframe>
                    <RestauUpdate
                        restaurantId={this.props.restaurantId}
                        name={this.props.name}
                        address={this.props.address}
                        description={this.props.description}
                        category={this.props.category}
                        usersId_fk={this.props.usersId_fk}
                    > </RestauUpdate>
                </div>
            );
        } else {
            return (
                <div className="sec">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.address}</p>
                    <h3>{this.props.description}</h3>
                    <p>{this.props.category}</p>
                    <p>Rating: {this.props.rating}</p>
              <iframe 
                            title="map"
                            width="270" 
                            height="270" 
                            id="gmap_canvas" 
                            src={"https://maps.google.com/maps?q="+ this.props.address +"&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0">
                        </iframe>
                </div>
            );

        }
    }
}