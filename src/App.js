import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Settings from './components/settings'

class App extends Component {
	state = {
		image: 'http://s1.1zoom.ru/big3/845/334726-svetik.jpg',
		selectedFilter: '',
		settings: {
			contrast: 100,
			hue: 0,
			brightnes: 100,
			sepia: 0
		}
	}

	hangdleChange = event => {
		console.log("st")
		const setting = event.target.id;
		const value = event.target.value;
		const settings = {...this.state.settings, [setting]: value };

		this.setState({ selectedFilter: '', settings });
	}

	updateSettings = (selectedFilter, settings) => {
		this.setState({selectedFilter, settings});
	}

	render() {
		const { image , selectedFilter , settings } = this.state;

		return (
			<div className="App">
				<Header title="Image Filters App" />
				<div className="container">
					<Settings settings={settings} hangdleChange={this.hangdleChange} />

					<div className="image-container">
						<div className="image">
							<img src="http://s1.1zoom.ru/big3/845/334726-svetik.jpg"/>
						</div>
						<div className="filters-line">
							<div className="item">
								<img src="http://s1.1zoom.ru/big3/845/334726-svetik.jpg" />
							</div>
							<div className="item">
								<img src="http://s1.1zoom.ru/big3/845/334726-svetik.jpg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
