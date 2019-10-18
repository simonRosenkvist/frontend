import React from 'react';
import './App.css';
import Sec from './Sec.js';
import SearchBar from './SearchBar';

export default class DisplaySearch extends React.Component {
	constructor(props){
		super(props);

			this.state = {
				arr: []
			}
	}



	renderSearch(info) {
		var len = this.props.data.length;
		var data = this.props.data;
			for (let i = 0; i < len; i++) {
				arr.push(
					<Sec
						name={data[i].name}
						address={data[i].address}
						category={data[i].category}
						description={data[i].description}
						rating={data[i].rating}
					></Sec>
				);
			}
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

	render() {
			const arr = this.state.data.map(info => (
				this.renderSearch({
					name:info.name,
	      			address:info.address,
	      			category:info.category,
	      			description:info.description,
	      			rating:info.rating,
				})
			)
		
		return(
			<div id='search'>
			<h1>Search Results</h1>
			{arr}
			</div>
		)

	}
}
