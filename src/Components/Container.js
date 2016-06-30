import React, { Component } from 'react';
import { connect } from 'react-redux';
import Salutations from './Salutations';
import Counter from './Counter';
import Sum from './Sum';
import canUseDOM from '../utils/canUseDOM';

export class Container extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    if (canUseDOM) {
      document.getElementById('root').setAttribute('aria-label', 'hello world');
    }
  }

  render() {
    return (<div className="sadasd">
      {
        this.props.counter.map((value, index) =>
          <Counter key={index} dispatch={this.props.dispatch} value={value} id={index} />
        )
      }
      <Sum sum={this.props.counter.length && this.props.counter.reduce((a,b) => a + b)}/>
      {this.props.names.map((name, index) => <Salutations name={name} key={index}/>)}
    </div>);
  }
}

function mapStatesToProps(state) {
  return {
    counter: state
  }
}

export default connect(mapStatesToProps)(Container);