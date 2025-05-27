import React from 'react';
import './CardModal.css';

function CardModal({ card, onClose }) {
	if (!card) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="card-modal" onClick={(e) => e.stopPropagation()}>
				<button className="close-btn" onClick={onClose}>
					✖
				</button>

				<div className="modal-content">
					<img
						src={card.images.large || card.images.small}
						alt={card.name}
						className="modal-img"
					/>

					<div className="card-details">
						<h2>{card.name}</h2>
						<p>
							<strong>Tipo:</strong> {card.supertype}{' '}
							{card.subtypes?.join(', ')}
						</p>
						<p>
							<strong>Rareza:</strong> {card.rarity || 'Desconocida'}
						</p>
						<p>
							<strong>HP:</strong> {card.hp || 'N/A'}
						</p>

						{card.attacks && (
							<>
								<h4>Ataques:</h4>
								<ul>
									{card.attacks.map((atk, index) => (
										<li key={index}>
											<strong>{atk.name}</strong>:{' '}
											{atk.text || 'Sin descripción'} ({atk.damage || '0'})
										</li>
									))}
								</ul>
							</>
						)}

						{card.abilities && (
							<>
								<h4>Habilidades:</h4>
								<ul>
									{card.abilities.map((ab, index) => (
										<li key={index}>
											<strong>{ab.name}</strong>: {ab.text}
										</li>
									))}
								</ul>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardModal;
