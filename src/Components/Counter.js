import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }
  
  componentWillMount() {
    this.state.value = this.props.value;
  }
  
  handleClick(incrementor) {
    this.props.onChange(this.state.value + incrementor);
    this.setState({
      value: this.state.value + incrementor
    })
  }

  render() {
    return <div>
      <button onClick={() => {this.handleClick(-1)}}>Minus</button>
      <div>{this.state.value}</div>
      <button onClick={() => {this.handleClick(1)}}>Plus</button>
    </div>
  }
}

Counter.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};

Counter.defaultProps = {
  value: 0,
  onChange: () => {}
};