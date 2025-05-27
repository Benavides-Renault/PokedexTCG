import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../lib/utils';

const TrainerContext = createContext();

export function TrainerProvider({ children }) {
	const [trainerName, setTrainerName] = useState(
		() => loadFromLocalStorage('trainerName') || '',
	);
	const [theme, setTheme] = useState(
		() => loadFromLocalStorage('theme') || 'light',
	);

	useEffect(() => {
		saveToLocalStorage('trainerName', trainerName);
	}, [trainerName]);

	useEffect(() => {
		saveToLocalStorage('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);

	return (
		<TrainerContext.Provider
			value={{ trainerName, setTrainerName, theme, setTheme }}
		>
			{children}
		</TrainerContext.Provider>
	);
}

export function useTrainer() {
	return useContext(TrainerContext);
}
