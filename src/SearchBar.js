import React from 'react';
import './App.css';
import Sec from './Sec.js';
import {Redirect} from 'react-router-dom';
import SearchRes from "./SearchRes";


export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchRes: '',
			val:".",
			restaurantArr: [],
			search:false
		}

		this.setTextInputRef = element => {
    		this.textInput = element;
    	};

    	this.focusTextInput = () => {
      		if (this.textInput) this.textInput.focus();
    	};
	}

	componentDidMount() {
    	this.focusTextInput();
  	}

	search = () => {
		var val = "";

		if (this.state.val.value !== undefined) {
			val = this.state.val.value;

		const parent = this;
		const axios = require('axios');
			let api = 'http://restau-back.herokuapp.com/api/restaurant/search/' + val;
				axios.get(api).then((restaurant) => {
					let restaurantList = JSON.parse(restaurant.request.response);
						this.setState({
							restaurantArr:[restaurantList],

						}, () => {
							parent.props.mordekaiser(restaurantList);
							this.setState({
								search:true
							})
						}// end anonymous function
					)// end set state
				}// end restaurant lambda 
			)// end then api get
		}// end if
	}// end search

	updateSearch = () => {
		var value = this.textInput.value;
			this.setState({
				val:{value},
			});
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

  		if(this.state.search == true) {
  			return(
				<div>
				<form id="searchForm">
				<a href='/'>
					<img id='home' width="40px" height="40px" src="https://image.flaticon.com/icons/svg/25/25694.svg"/>
				</a>
			      	<input id="searchField" ref={this.setTextInputRef} placeholder="Restaurant" type="text" onChange={this.updateSearch}></input>
			      	<input id="searchBtn" value="Search" type="button" onClick={this.search}></input>
	      		</form>

				<Redirect to="/DisplaySearch">

				</Redirect>
				</div>
  			)
  		}

    	return (
    		<div>

		      	<form id="searchForm">
		      		<a href='/'>
		      			<img id='home' width="40px" height="40px" src="https://image.flaticon.com/icons/svg/25/25694.svg"/>
		      		</a>
					    <input id="searchField" ref={this.setTextInputRef} placeholder="Restaurant" type="text" onChange={this.updateSearch}></input>
					    <input id="searchBtn" value="Search" type="button" onClick={this.search}></input>
	      		</form>

	      			
	      	</div>
      	)
      }
  }