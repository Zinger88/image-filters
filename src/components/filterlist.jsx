import React from 'react';
import Filter from './filter';
import Image from './image';


function FilterList ({image, settings, selectedFilter, updateSettings}) {
	return (
		<div className="filters-line">
			<Filter 
				name="noir"
				settings={{contrast: 137, hue: 0, brightness: 122, sepia: 0}}
				selected = {selectedFilter==="noir"}
				onClick = {updateSettings} >
				<Image src={image} mainClassName="mini-img"/>
			</Filter>

			<Filter 
				name="sepia"
				settings={{contrast: 94, hue: 0, brightness: 92, sepia: 100}}
				selected = {selectedFilter==="sepia"}
				onClick = {updateSettings} >
				<Image src={image} mainClassName="mini-img"/>
			</Filter>

			<Filter 
				name="green"
				settings={{contrast: 131, hue: 84, brightness: 82, sepia: 0}}
				selected = {selectedFilter==="green"}
				onClick = {updateSettings} >
				<Image src={image} mainClassName="mini-img"/>
			</Filter>

			<Filter 
				name="blue"
				settings={{contrast: 94, hue: 180, brightness: 92, sepia: 0}}
				selected = {selectedFilter==="blue"}
				onClick = {updateSettings} >
				<Image src={image} mainClassName="mini-img"/>
			</Filter>

			<Filter 
				name="natural"
				settings={{contrast: 100, hue: 0, brightness: 100, sepia: 0}}
				selected = {selectedFilter==="natural"}
				onClick = {updateSettings} >
				<Image src={image} mainClassName="mini-img"/>
			</Filter>
		</div>
	)
}

export default FilterList;