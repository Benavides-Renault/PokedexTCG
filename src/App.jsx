import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import Home from './pages/Home';
import DeckBuilder from './pages/DeckBuilder';
import About from './pages/About';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route element={<MainLayout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/deck" element={<DeckBuilder />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
