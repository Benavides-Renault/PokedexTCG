import React from 'react';
import './Loading.css';

function Loading() {
	return (
		<div className="loading-container">
			<div className="pokeball"></div>
			<p>Cargando cartas...</p>
		</div>
	);
}

export default Loading;
