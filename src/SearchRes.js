import React from "react";

class SearchRes extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            searchRes: ''
        }
    }

    render(){
        return(
            <button className="SearchRes" id="searchBtn" value="Search"
                    onClick={() => this.props.onClick()}
                    >
                {this.props.searchRes}
            </button>
        );
    }





} export default SearchRes;