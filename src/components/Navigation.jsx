import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
	return (
		<nav className="nav-bar">
			<NavLink
				to="/home"
				className={({ isActive }) => (isActive ? 'active' : '')}
			>
				 Home
			</NavLink>
			<NavLink
				to="/deck"
				className={({ isActive }) => (isActive ? 'active' : '')}
			>
				 Deck
			</NavLink>
			<NavLink
				to="/about"
				className={({ isActive }) => (isActive ? 'active' : '')}
			>
				 About
			</NavLink>
		</nav>
	);
}

export default Navigation;
