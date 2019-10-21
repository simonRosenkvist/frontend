import React from 'react';
import './App.css';
import Sec from './Sec.js';

export default class DisplaySearch extends React.Component {

	renderSearch() {
		var data = this.props.data;
		const arr = data.map(info => (
				<Sec
					restaurantId={info.restaurantId}
					usersIdFk={info.usersIdFk}
					name={info.name}
					address={info.address}
					category={info.category}
					description={info.description}
					rating={info.rating}
				></Sec>
			)

		)
		if(arr == 0){
			return <h1>NO RESTAURANT FOUND</h1>;
		}
		return arr;
	}


	render() {

		return(
			<div id='search'>
				<h1>Search Results</h1>
				{this.renderSearch()}
			</div>
		)

	}
}
