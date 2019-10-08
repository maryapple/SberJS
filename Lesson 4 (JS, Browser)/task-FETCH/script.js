/** Создать простую страничку которая выводит в выпадающий список
* всех персонажей (people) с name 'Cat' по запросу https://ghibliapi.herokuapp.com/species
* для начала, пусть в значении опции будет просто порядковый номер.
* после выбора опции, отсылается запрос на url https://ghibliapi.herokuapp.com/people/{id}
* внизу появляется информация о персонаже -
* // name, eye_color, gender, films
* а так же изображение (случайное с unsplash)
* https://ghibliapi.herokuapp.com/#
**/

function renderCatPic(){
	fetch(`https://source.unsplash.com/200x200/?cat`)
		.then((response) => response.url) 
		.then(url => setImage(url))
		.catch(err => console.log(err));
}

function getAllChars() {
	fetch('https://ghibliapi.herokuapp.com/species')
		.then(response => response.json())
		.then(data => { addOptions(data); })
		.catch(err => console.log(err));
}

function getInformation(link) {
	fetch(link)
		.then(response => response.json())
		.then(data => setInformation(data))
		.catch(err => console.log(err));
}

const selectList = document.querySelector('select');
const img = document.querySelector('img');
const span = document.querySelector('span');

// Выведем в выпадающий список всех персонажей (people) с name 'Cat'. 
// В значении опции - порядковый номер персонажа
function addOptions(arr) {
	let cnt = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].name === 'Cat') {
			for (let j = 0; j < arr[i].people.length; j++) {
				// Добавляем номера в селект
				const option = document.createElement('option');
				option.text = ++cnt;
				selectList.append(option);
				// Запоминаем ссылку на выбранного персонажа
				option.value = arr[i].people[i];
			}
		}
	}
}

function renderTheData() {
	getInformation(selectList.value);
	renderCatPic();
}

function setImage(url) {
	img.src = url;
}

// Выводим name, eye_color, gender, films
function setInformation(obj) {
	span.innerHTML = '';
	for (key in obj) {
		if (key == "name" || key == "eye_color" || key == "gender" || key == "films") {
			let p = document.createElement('p');
			p.innerHTML = `<strong>${key}:</strong> ${obj[key]}`;
			span.append(p);
		}
	}
}

getAllChars();
selectList.addEventListener('change', renderTheData);