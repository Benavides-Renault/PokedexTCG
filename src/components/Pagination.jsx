import React from 'react';
import './Pagination.css';

function Pagination({ currentPage, onPageChange, hasNextPage }) {
	return (
		<div className="pagination">
			<button
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				← Anterior
			</button>

			<span>Página {currentPage}</span>

			<button
				disabled={!hasNextPage}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Siguiente →
			</button>
		</div>
	);
}

export default Pagination;
