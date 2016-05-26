import React, { Component } from 'react';

export default class Salutations extends Component {
	handleClick() {
		alert(this.props.name);
	}

	render() {
		return (<div onClick={this.handleClick.bind(this)}>
			Hello {this.props.name}
		</div>);
	}
}