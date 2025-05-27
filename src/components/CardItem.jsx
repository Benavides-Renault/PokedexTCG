import React from 'react';
import './CardItem.css';
import { useDeck } from '../context/DeckContext';

function CardItem({ card, onClick, addToDeck = false }) {
	const { addCard } = useDeck();

	const handleClick = () => {
		if (addToDeck) {
			addCard(card);
		} else if (onClick) {
			onClick(card);
		}
	};

	return (
		<div className="card-item" onClick={handleClick} role="button" tabIndex={0}>
			<img src={card.images.small} alt={card.name} className="card-img" />
			<div className="card-info">
				<h3>{card.name}</h3>
				<p>{card.rarity || 'Rareza desconocida'}</p>
				<p>
					{card.supertype} {card.subtypes?.join(', ')}
				</p>
			</div>
		</div>
	);
}

export default CardItem;
