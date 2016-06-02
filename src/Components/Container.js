import React, { Component } from 'react';
import Salutations from './Salutations';
import Counter from './Counter';
import Sum from './Sum';
import canUseDOM from '../utils/canUseDOM';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: [1,2,3,4,10]
    }
  }
  
  componentWillMount() {
    if (canUseDOM) {
      document.getElementById('root').setAttribute('aria-label', 'hello world');
    }
  }

  listenChange(index, value) {
    this.state.sum[index] = value;
    this.setState()
  }

  render() {
    return (<div className="sadasd">
      {
        this.state.sum.map((value, index) => <Counter key={index} value={value} onChange={(changeValue) => {this.listenChange(index, changeValue)}}/>)
      }
      <Sum sum={this.state.sum.reduce((a, b) => a + b)}/>
      {this.props.names.map((name, index) => <Salutations name={name} key={index}/>)}
    </div>);
  }
}