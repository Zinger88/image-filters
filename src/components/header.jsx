import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<h3>{this.props.title}</h3>
			</header>
		)
	}
}

export default Header;