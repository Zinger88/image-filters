import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Settings from './components/settings';
import FilterList from './components/filterlist'
import Filter from './components/filter'
import Image from './components/image';

class App extends Component {
	state = {
		image: 'http://s1.1zoom.ru/big3/845/334726-svetik.jpg',
		selectedFilter: '', 
		settings: {
			contrast: 100,
			hue: 0,
			brightness: 100,
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
		const { image , selectedFilter , settings, mainImg } = this.state;

		return (
			<div className="App">
				<Header title="Image Filters App" select={selectedFilter}/>
				<div className="container">
					<Settings settings={settings} hangdleChange={this.hangdleChange} />

					<div className="right-container">
						<Filter settings={settings}>
							<Image src={image} mainClassName="main-img"/>
						</Filter>

						<FilterList
							image = {image}
							settings ={settings}
							selectedFilter = {selectedFilter}
							updateSettings = {this.updateSettings}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
