export function searchById(id: any, key: string) {
	let objects = JSON.parse(localStorage.getItem(key) || '[]');
	let findedObject;
	for (let i = 0; i < objects.length; i++) {
		if (objects[i].id == id) {
			findedObject = objects[i];
			break;
		}
	}
	return findedObject;
}
