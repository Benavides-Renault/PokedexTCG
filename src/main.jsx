import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DeckProvider } from './context/DeckContext';
import { TrainerProvider } from './context/TrainerContext';

import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TrainerProvider>
			<DeckProvider>
				<App />
			</DeckProvider>
		</TrainerProvider>
	</React.StrictMode>,
);
