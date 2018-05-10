import React from 'react';

function Range ({name, value, min, max, onChange}) {
	return (
		<div>
			<p>{name} <span>{value}</span></p>
			<input 
				id={name}
				type="range"
				value={value}
				step="1"
				min={min}
				max={max}
				onChange={onChange}
			/>
		</div>
	);
}

export default Range;