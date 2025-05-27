import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem';
import CardModal from '../components/CardModal';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import './Home.css';

function Home() {
	const [cards, setCards] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [search, setSearch] = useState('');
	const [hasNextPage, setHasNextPage] = useState(false);

	const fetchCards = async () => {
		setLoading(true);

		const query = [];
		if (search.trim()) {
			query.push(`name:\"${search.trim()}\"`);
		}

		const fullQuery =
			query.length > 0 ? query.join(' ') : 'supertype:"Pokémon"';

		try {
			const res = await fetch(
				`https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(
					fullQuery,
				)}&page=${page}&pageSize=20`,
			);
			const data = await res.json();
			setCards(data.data || []);
			setHasNextPage((data.data || []).length === 20);
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
	}, [page, search]);

	return (
		<div className="home-page">
			<h2>📚 Pokédex</h2>

			<input
				type="text"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					setPage(1);
				}}
				placeholder="Buscar por nombre..."
				className="search-input"
			/>

			{loading ? (
				<Loading />
			) : (
				<>
					<div className="card-grid">
						{cards.map((card) => (
							<CardItem key={card.id} card={card} onClick={setSelectedCard} />
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

export default Home;
