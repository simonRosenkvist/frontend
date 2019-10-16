import React from 'react';
import './App.css';

export default class Sec extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sec">
        <h2>{this.props.name}</h2>
        <p>{this.props.address}</p>
        <h3>{this.props.description}</h3>
        <p>{this.props.category}</p>
        <p>Rating: {this.props.rating}</p>
      </div>
    )
  }
}