import React, { Component } from 'react';
import Salutations from './Salutations';
import canUseDOM from '../utils/canUseDOM';

export default class Container extends Component {
  componentWillMount() {
    if (canUseDOM) {
      window.Document.getElementById('root').setAttribute('aria-label', 'hello world');
    }
  }

  render() {
    return (<div>
      {this.props.names.map((name, index) => <Salutations name={name} key={index}/>)}
    </div>);
  }
}