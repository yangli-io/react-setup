import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  handleClickIncrease() {
    this.props.dispatch({
      type: 'INCREASE',
      id: this.props.id
    });
  }

  handleClickDecrease() {
    this.props.dispatch({
      type: 'DECREASE',
      id: this.props.id
    });
  }

  render() {
    return <div>
      <button onClick={() => {this.handleClickDecrease()}}>Minus</button>
      <div>{this.props.value}</div>
      <button onClick={() => {this.handleClickIncrease()}}>Plus</button>
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