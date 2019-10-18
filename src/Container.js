import React from 'react';
import './App.css';
import Sec from './Sec.js';
import Rev from './Rev.js';

export default class Container extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		data: [],
    		revData: [],
    		rev: null
    	};
 	}

	componentDidMount() {

		const axios = require('axios');
		let api = 'http://restau-back.herokuapp.com/api/restaurant/top';
		let api2 = 'http://restau-back.herokuapp.com/api/review/latest';
		
			axios.get(api).then((response) => {
				let pack = JSON.parse(response.request.response);
					this.setState({
						data:pack
				})
			}
		)

			axios.get(api2).then((resp) => {
				let revPack = JSON.parse(resp.request.response);
					this.setState({
						revData:revPack
					})
			}
		)
 	}

	createSec(info) {
		return(
			<Sec
				name={info.name}
				address={info.address}
				category={info.category}
				description={info.description}
				rating={info.rating}
			/>
		)
	}

	createRev(revInfo) {
		return(
		  	<Rev
		  		rating={revInfo.rating}
		  		reviewText={revInfo.reviewText}
		  		updatedAt={revInfo.updatedAt}
		  		userId={revInfo.userId}
		  		restaurantId={revInfo.restaurantId}
		  	/>
		)
	}

  render() {

  	const infoArr = this.state.data.map(info => (
  		this.createSec({
	      	name:info.name,
	      	address:info.address,
	      	category:info.category,
	      	description:info.description,
	      	rating:info.rating,
	    })
	))

	const revArr = this.state.revData.map(revInfo => (
		this.createRev({
			rating:revInfo.rating,
			reviewText:revInfo.reviewText,
			updatedAt:revInfo.updatedAt,
			userId:revInfo.usersId_fk,
			restaurantId:revInfo.restaurantId_fk,
		})
	))

    return (
      <div id="container">
      	<h1>Restaurant Finder</h1>
      		<div id="ri">
			{revArr}
			</div>
	      	{infoArr}

     </div>
    )
  }
}
