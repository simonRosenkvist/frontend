import React from 'react';
import './App.css';
import {Redirect} from 'react-router-dom';


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

	search = (event) => {
        event.preventDefault();
		var val = "";

		if (this.state.val !== undefined) {
			val = this.state.val;

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
				val:value
			});
			
	}

  	render() {

  		if(this.state.search === true) {
  			return(
				<div>
				<form id="searchForm" onSubmit={(e) => this.search(e)}>
				<a href='/'>
					<img id='home' width="40px" height="40px" src="https://image.flaticon.com/icons/svg/25/25694.svg" alt=""/>
				</a>
			      	<input id="searchField" ref={this.setTextInputRef} placeholder="Restaurant" type="text" onChange={this.updateSearch}></input>
			      	<input id="searchBtn" value="Search" type="button" onClick={(e) => this.search(e)}></input>
	      		</form>

				<Redirect to="/DisplaySearch">
				</Redirect>

				</div>
  			)
  		}

    	return (
    		<div>

		      	<form id="searchForm" onSubmit={(e) => this.search(e)}>
		      		<a href='/'>
		      			<img id='home' width="40px" height="40px" src="https://image.flaticon.com/icons/svg/25/25694.svg" alt=""/>
		      		</a>
					    <input id="searchField" ref={this.setTextInputRef} placeholder="Restaurant" type="text" onChange={this.updateSearch}></input>
					    <input id="searchBtn" value="Search" type="button" onClick={(e) => this.search(e)}></input>
	      		</form>

	      			
	      	</div>
      	)
      }
  }