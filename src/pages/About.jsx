import React from 'react';
import './About.css';

function About() {
	return (
		<div className="about">
			<h2>Crónica de un desarrollador con TDAH atrapado en la Pokédex</h2>

			<p>🛠️ Código con bugs = experiencia + trauma.</p>
			<p>📦 API de cartas = inestabilidad emocional + JSONs mágicos.</p>
			<p>
				🥴 Aprendí más sobre estados y props que sobre mis propias emociones.
			</p>
			<p>
				🎯 Esta app tiene una misión: ayudarte a coleccionar cartas... y tal vez
				a encontrar el sentido de la vida.
			</p>
			<p>
				🌑 Si ves errores raros, reiniciá. Si siguen, prendé una vela y buscá un
				exorcista digital.
			</p>

			<p className="credit">
				Proyecto de <strong>Orlando Renault</strong> 😎 <br />
				“Usalo bajo tu propio riesgo. Esta Pokédex puede contener rastreador de
				cartas caras.” ⚡
			</p>
		</div>
	);
}

export default About;
