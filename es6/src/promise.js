export function sleep(time) {
	return new Promise((resolve, reject) => {
		if(time < 0){
			reject(time);
		}
		setTimeout( () => { resolve(time); }, time);
	});
	
}

