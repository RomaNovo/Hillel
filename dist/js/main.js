// ============ VERSION 1 ---- start
/* class LocalStrg {
	constructor(prop) {
		this.prop = prop;
		this.localStr = window.localStorage;
		this.arr = [];
	}
	getData() {
		return this.localStr[this.prop];
	}
	setData(obj) {
		this.arr = this.arr.concat(JSON.parse(obj));
		this.localStr.setItem(this.prop, JSON.stringify(this.arr));
	}
	clear() {
		this.localStr.clear()
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let list = document.querySelector('.content__list'),
		btnShow = document.querySelector('.content__button_show'),
		btnClear = document.querySelector('.content__button_clear');

	const stor = new LocalStrg('data');

	let clearList = ()=> list.innerHTML = '';
	let render = arr => arr.forEach(v => list.innerHTML += `ID ${v.id} - TITLE ${v.title} <br>`);
		
	async function getData() {
		
			let data1 = await fetch('data_1.json');
			let data2 = await fetch('data_2.json');
			let [resp1, resp2] = await Promise.all([data1.json(), data2.json()]);
			const resultArr = [...resp1.data.list, ...resp2.data.list];
			
			(stor.getData())? render(resultArr) : null;
				
			btnShow.addEventListener('click', function init() {
				clearList();
				render(resultArr);
				btnShow.removeEventListener('click', init);
				stor.setData(JSON.stringify(resultArr));
			});  	
	}
	getData() 

	btnClear.addEventListener('click', () => {
		stor.clear();
		window.location.reload();
	})
})  */
// ============ VERSION 1 ---- end


// ============ VERSION 2 ---- start

/*  class Request {

	getData(url, fn) {
		fetch(url)
			.then(resp => resp.json())
			.then(resp => {
				fn(resp);
			})
	}
}
class LocalStrg {
	constructor(prop) {
		this.prop = prop;
		this.localStr = window.localStorage;
		this.arr = [];
	}
	getData() {
		return this.localStr[this.prop];
	}
	setData(obj) {
		this.arr = this.arr.concat(JSON.parse(obj) );
		this.localStr.setItem(this.prop, JSON.stringify(this.arr));
	}
	clear() {
		this.localStr.clear()
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let list 		 = document.querySelector('.content__list'),
			btnShow  = document.querySelector('.content__button_show'),
			btnClear = document.querySelector('.content__button_clear');

	const request = new Request();
	const stor 		= new LocalStrg('data');

	let render = resp => {		
		if(typeof resp == 'object') {
			let response = resp.data.list;
			response.forEach(v => list.innerHTML += `ID ${v.id} - TITLE ${v.title} <br>`);
			stor.setData(JSON.stringify(response));
		} else {
			list.innerHTML = '';
			let response =  JSON.parse(resp);
			response.forEach(v => list.innerHTML += `ID ${v.id} - TITLE ${v.title} <br>`);
		}
	};

	let init = () => {
		list.innerHTML = '';
		request.getData('data_1.json', render);
		request.getData('data_2.json', render);
	}

 	if(stor.getData()) render(stor.getData());
	
	btnShow.addEventListener('click', ()=> {
		 (stor.getData())? render(stor.getData()) :	init();
	})

	btnClear.addEventListener('click', () => {
		stor.clear();
		window.location.reload();
	})
})  */

// ============ VERSION 2 ---- end


