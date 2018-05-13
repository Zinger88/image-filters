import React from 'react';

function Image ({src, mainClassName}) {
	const style = { backgroundImage: `url(${src})` };

	return (
		<div className={mainClassName} style={style}></div>
	)
}

export default Image;