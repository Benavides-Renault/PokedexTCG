import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';
import './MainLayout.css';

function MainLayout({ children }) {
	return (
		<div className="main-layout">
			<header className="main-header">
				<Navigation />
				<div className="toggles">
					<ThemeToggle />
				</div>
			</header>

			<main>
				<Outlet /> {/* Esto debe estar presente */}
				{children}
			</main>
		</div>
	);
}
export default MainLayout;
