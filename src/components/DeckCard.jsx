import React from 'react';
import './DeckCard.css';
import { useDeck } from '../context/DeckContext';

function DeckCard({ card }) {
	const { removeCard } = useDeck();

	return (
		<div className="deck-card" tabIndex={0}>
			<img src={card.images.small} alt={card.name} className="deck-card-img" />
			<div className="deck-card-info">
				<h4>{card.name}</h4>
				<p>{card.rarity || 'Rareza desconocida'}</p>
				<button onClick={() => removeCard(card.id)}>❌ Quitar</button>
			</div>
		</div>
	);
}

export default DeckCard;
