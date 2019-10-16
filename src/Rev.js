import React from 'react';
import './App.css';

export default class Rev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	user: "Genghis Khan",
    	restaurant: "Red Palace"
	}
}

componentDidMount() {

		const axios = require('axios');
		let api = 'http://restau-back.herokuapp.com/api/restaurant/' + this.props.restaurantId;
			axios.get(api).then((restaurant) => {
				let restau = JSON.parse(restaurant.request.response);
					this.setState({
						restaurant:restau.name
				})
			}
		)

		let apii = 'http://restau-back.herokuapp.com/api/user/' + this.props.userId;
			axios.get(apii).then((user) => {
				let specUser = JSON.parse(user.request.response)
					this.setState({
						user:specUser.username
				})
			}
		)
}
	render() {
		return(
			<div className="rev">
				<h2>{this.state.restaurant}</h2>
				<h3>{this.props.reviewText}</h3>
				<h2>Rating: {this.props.rating}/5</h2>
				<p><i>Written: {this.props.updatedAt}</i></p>
				<p>{this.state.user}</p>
			</div>
		)
	}

}