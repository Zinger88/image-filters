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
				<Image src={image} />
			</Filter>

			<Filter 
				name="sepia"
				settings={{contrast: 94, hue: 0, brightness: 92, sepia: 100}}
				selected = {selectedFilter==="noir"}
				onClick = {updateSettings} >
				<Image src={image} />
			</Filter>
		</div>
	)
}

export default FilterList;