import React from 'react';
import Range from './range'

function Settings ({settings, hangdleChange}) {
	const {contrast, hue, brightnes, sepia} = settings;
	return (
		<div className="aside">
			<h3>Filters</h3>
			<Range
				min={0}
				max={200}
				name = "contrast"
				value = {contrast}
				onChange={hangdleChange}
			 />

			 <Range
				min={0}
				max={150}
				name = "brightness"
				value = {brightnes}
				onChange= {hangdleChange}
			 />
			
			<Range
				min={0}
				max={200}
				name = "hue"
				value = {hue}
				onChange={hangdleChange}
			 />
			<Range
				min={0}
				max={200}
				name = "sepia"
				value = {sepia}
				onChange={hangdleChange}
			 />
		</div>
	)
}

export default Settings;