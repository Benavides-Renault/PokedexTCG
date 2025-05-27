import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../lib/utils';

const DeckContext = createContext();

export function DeckProvider({ children }) {
	const [deck, setDeck] = useState(() => loadFromLocalStorage('deck') || []);

	const addCard = (card) => {
		const updated = [...deck, card];
		setDeck(updated);
		saveToLocalStorage('deck', updated);
	};

	const removeCard = (cardId) => {
		const updated = deck.filter((c) => c.id !== cardId);
		setDeck(updated);
		saveToLocalStorage('deck', updated);
	};

	const clearDeck = () => {
		setDeck([]);
		saveToLocalStorage('deck', []);
	};

	useEffect(() => {
		const sync = () => {
			const updated = loadFromLocalStorage('deck') || [];
			setDeck(updated);
		};
		window.addEventListener('storage', sync);
		return () => window.removeEventListener('storage', sync);
	}, []);

	return (
		<DeckContext.Provider value={{ deck, addCard, removeCard, clearDeck }}>
			{children}
		</DeckContext.Provider>
	);
}

export function useDeck() {
	return useContext(DeckContext);
}
