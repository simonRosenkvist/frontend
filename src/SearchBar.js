import React from 'react';
import './App.css';

export default class SearchBar extends React.Component {

	search() {
		
		console.log("make connection and SQL(?) selectors here");
	}

  	render() {
    	return (
	      <form id="searchForm">
	      	<input id="searchField" placeholder="restaurant" type="text"></input>
	      	<input id="searchBtn" value="Search" type="button" onClick={this.search}></input>
	      </form>
      	)
      }
  }