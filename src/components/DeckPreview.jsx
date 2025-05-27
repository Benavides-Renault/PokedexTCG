import React from 'react';
import DeckCard from './DeckCard';
import './DeckPreview.css';
import { useDeck } from '../context/DeckContext';

function DeckPreview() {
	const { deck, clearDeck } = useDeck();
	const total = deck.length;

	return (
		<div className="deck-preview">
			<div className="deck-header">
				<h2>Mi Deck ({total} cartas)</h2>
				{total > 0 && (
					<button className="clear-btn" onClick={clearDeck}>
						🗑 Vaciar Deck
					</button>
				)}
			</div>

			{total === 0 ? (
				<p className="deck-empty">No has agregado cartas aún.</p>
			) : (
				<div className="deck-list">
					{deck.map((card) => (
						<DeckCard key={card.id} card={card} />
					))}
				</div>
			)}
		</div>
	);
}

export default DeckPreview;
