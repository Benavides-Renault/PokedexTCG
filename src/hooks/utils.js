export function saveToLocalStorage(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (err) {
		console.error(`Error al guardar "${key}" en localStorage`, err);
	}
}

export function loadFromLocalStorage(key) {
	try {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	} catch (err) {
		console.error(`Error al leer "${key}" desde localStorage`, err);
		return null;
	}
}
