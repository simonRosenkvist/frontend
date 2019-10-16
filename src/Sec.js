import React from 'react';
import './App.css';

export default class Sec extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        val: 0,
      };
  }

  inc = () => {
    this.setState({val: this.state.val +1}); 
  }

  componentDidMount() {
    this.setState({val: this.props.value});
  }

  render() {
    return (
      <div className='secDiv' onClick={this.inc}>
        {this.state.val}
      </div>
    )
  }
}