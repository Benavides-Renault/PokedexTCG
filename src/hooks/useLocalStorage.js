import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') return initialValue;

		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (err) {
			console.error(`Error al leer "${key}" desde localStorage`, err);
			return initialValue;
		}
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		try {
			localStorage.setItem(key, JSON.stringify(storedValue));
		} catch (err) {
			console.error(`Error al guardar "${key}" en localStorage`, err);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}
