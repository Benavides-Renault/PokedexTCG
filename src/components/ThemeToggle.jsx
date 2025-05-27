import React from 'react';
import './ThemeToggle.css';
import { useTrainer } from '../context/TrainerContext';

function ThemeToggle() {
	const { theme, setTheme } = useTrainer();

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return (
		<button className="theme-toggle" onClick={toggleTheme}>
			{theme === 'dark' ? '🌙 Modo Oscuro' : '🌞 Modo Claro'}
		</button>
	);
}

export default ThemeToggle;
