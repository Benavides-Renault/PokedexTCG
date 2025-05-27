import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import { useTrainer } from '../context/TrainerContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Landing() {
	const navigate = useNavigate();
	const { trainerName, setTrainerName } = useTrainer();
	const [inputName, setInputName] = useState(trainerName || '');
	const [deckName, setDeckName] = useLocalStorage('deckName', '');
	const [creatingDeck, setCreatingDeck] = useState(false);

	const handleOption = (option) => {
		if (inputName.trim()) setTrainerName(inputName);

		if (option === 'pokedex') navigate('/home');
		else if (option === 'deck') navigate('/deck');
		else if (option === 'crear') setCreatingDeck(true);
	};

	const handleCreateDeck = () => {
		if (deckName.trim()) {
			navigate('/deck');
		}
	};

	return (
		<div className="landing">
			<h1>✨ Bienvenido a tu Pokédex TCG</h1>

			<div className="landing-card">
				<label>
					¿Cómo te llamás, entrenador?
					<input
						type="text"
						value={inputName}
						onChange={(e) => setInputName(e.target.value)}
						placeholder="Ash, Red, vos..."
					/>
				</label>

				{!creatingDeck && inputName && (
					<div className="landing-options">
						<button onClick={() => handleOption('pokedex')}>
							🔎 Ver Pokédex
						</button>
						<button onClick={() => handleOption('deck')}>🃏 Ver Deck</button>
						<button onClick={() => handleOption('crear')}>
							✨ Crear nuevo Deck
						</button>
					</div>
				)}

				{creatingDeck && (
					<div className="deck-name-form">
						<label>
							¿Cómo se llama tu nuevo deck?
							<input
								type="text"
								value={deckName}
								onChange={(e) => setDeckName(e.target.value)}
								placeholder="Ej: Equipo Fuego 🔥"
							/>
						</label>
						<button onClick={handleCreateDeck}>🚀 Crear y continuar</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Landing;
