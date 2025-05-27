export function saveToLocalStorage(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error('Error guardando en localStorage:', error);
	}
}

export function loadFromLocalStorage(key) {
	try {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	} catch (error) {
		console.error('Error cargando de localStorage:', error);
		return null;
	}
}

export function clearFromLocalStorage(key) {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.error('Error eliminando de localStorage:', error);
	}
}
