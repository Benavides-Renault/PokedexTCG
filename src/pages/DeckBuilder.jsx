import React, { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import CardItem from '../components/CardItem';
import CardModal from '../components/CardModal';
import DeckPreview from '../components/DeckPreview';
import Loading from '../components/Loading';
import './DeckBuilder.css';

import { loadFromLocalStorage } from '../lib/utils';
import { useDeck } from '../context/DeckContext';

function DeckBuilder() {
	const [cards, setCards] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);
	const [filters, setFilters] = useState({
		name: '',
		supertype: '',
		rarity: '',
	});
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [hasNextPage, setHasNextPage] = useState(false);

	const { deck } = useDeck();
	const deckName = loadFromLocalStorage('deckName') || 'Mi Deck';

	const fetchCards = async () => {
		setLoading(true);

		let query = [];
		if (filters.name?.trim()) query.push(`name:\"${filters.name.trim()}\"`);
		if (filters.supertype) query.push(`supertype:\"${filters.supertype}\"`);
		if (filters.rarity) query.push(`rarity:\"${filters.rarity}\"`);

		const fullQuery =
			query.length > 0 ? query.join(' ') : 'supertype:"Pokémon"';

		try {
			const res = await fetch(
				`https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(
					fullQuery,
				)}&page=${page}&pageSize=40`,
			);
			const data = await res.json();
			setCards(data.data || []);
			setHasNextPage((data.data || []).length === 40);
		} catch (err) {
			console.error('Error al cargar cartas:', err);
			setCards([]);
			setHasNextPage(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCards();
	}, [filters, page]);

	const handleFilter = (newFilters) => {
		setFilters(newFilters);
		setPage(1);
	};

	return (
		<div className="deck-container">
			<h2>🃏 Construyendo: {deckName}</h2>
			<DeckPreview />

			<h3>Agregar cartas</h3>
			<Filters onFilter={handleFilter} />

			{loading ? (
				<Loading />
			) : (
				<>
					<div className="card-grid">
						{cards.map((card) => (
							<CardItem key={card.id} card={card} addToDeck />
						))}
					</div>
					{cards.length > 0 && (
						<Pagination
							currentPage={page}
							onPageChange={setPage}
							hasNextPage={hasNextPage}
						/>
					)}
				</>
			)}

			<CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
		</div>
	);
}

export default DeckBuilder;
