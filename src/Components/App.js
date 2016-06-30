import React, { Component } from 'react';
import { createStore } from 'redux';
import axios from 'axios';
import counterReducer from '../Reducers/counterReducer';
import { Provider } from 'react-redux';
import Container from './Container';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(counterReducer, []);
    axios.get('/Counter').then((data) => {
      this.store.dispatch({
        type: 'GET_DATA',
        data: data.data
      })
    })
  }
  
  render() {
    return <Provider store={this.store}>
      <Container names={["steve", "aarthi", "steve", "egor", "bill"]}/>
    </Provider>
  }
}