import React from 'react';
import './App.css';

export default class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			searchRes: ''
		}
	}

	search() {
		
		console.log("make connection and SQL(?) selectors here");
	}

	handleClick(event) {
		event.preventDefault();
		//onst squares = this.state.squares.slice();
		//squares[i] = 'X';
		console.log(event);
		this.setState({searchRes: event.target.value});
		console.log(this.state.searchRes);
	}

	


  	render() {
    	return (
			<div>
				<form id="searchForm">
					<input id="searchField" placeholder="restaurant" type="text"></input>
					<input id="searchBtn" value="Search" type="button" onClick={this.search}></input>
				</form>
			</div>
      	)
      }
  }