import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<h3>{this.props.title}. Filter: ({this.props.select ? this.props.select : "natural"})</h3>
			</header>
		)
	}
}

export default Header;