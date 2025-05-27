import React, { useEffect } from 'react';
import './Filters.css';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Filters({ onFilter }) {
	const [filters, setFilters] = useLocalStorage('lastFilters', {
		name: '',
		supertype: '',
		rarity: '',
	});

	useEffect(() => {
		onFilter(filters);
	}, [filters]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFilters({ ...filters, [name]: value });
	};

	const handleClear = () => {
		const cleared = { name: '', supertype: '', rarity: '' };
		setFilters(cleared);
		onFilter(cleared);
	};

	return (
		<form className="filters-form" onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				name="name"
				placeholder="Nombre..."
				value={filters.name}
				onChange={handleChange}
			/>

			<select
				name="supertype"
				value={filters.supertype}
				onChange={handleChange}
			>
				<option value="">Tipo</option>
				<option value="Pokémon">Pokémon</option>
				<option value="Trainer">Entrenador</option>
				<option value="Energy">Energía</option>
			</select>

			<select name="rarity" value={filters.rarity} onChange={handleChange}>
				<option value="">Rareza</option>
				<option value="Common">Común</option>
				<option value="Uncommon">No común</option>
				<option value="Rare">Rara</option>
				<option value="Rare Holo">Rara Holo</option>
				<option value="Promo">Promocional</option>
			</select>

			<button type="submit">🔍 Filtrar</button>
			<button type="button" onClick={handleClear}>
				❌ Limpiar
			</button>
		</form>
	);
}

export default Filters;
