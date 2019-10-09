/** Создать простую страничку которая выводит в выпадающий список
* всех персонажей (people) с name 'Cat' по запросу https://ghibliapi.herokuapp.com/species
* для начала, пусть в значении опции будет просто порядковый номер.
* после выбора опции, отсылается запрос на url https://ghibliapi.herokuapp.com/people/{id}
* внизу появляется информация о персонаже -
* // name, eye_color, gender, films
* а так же изображение (случайное с unsplash)
* https://ghibliapi.herokuapp.com/#
**/

async function renderCatPic(){
	const pictureData = await fetch(`https://source.unsplash.com/200x200/?cat`);
	img.src = pictureData.url;	
}

function getId(link){
	return fetch(link).then(data=>data.json()).then(dataJson=>dataJson.id);
}

function getAllChars() {
	fetch('https://ghibliapi.herokuapp.com/species')
		.then(response => response.json())
		.then(data => { addOptions(data); })
		.catch(err => console.log(err));
}

function getInformation(id) {
	fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
		.then(response => response.json())
		.then(data => setInformation(data))
		.catch(err => console.log(err));
}


const selectList = document.querySelector('select');
const img = document.querySelector('img');
const span = document.querySelector('span');

// Выведем в выпадающий список всех персонажей (people) с name 'Cat'. 
// В значении опции - порядковый номер персонажа
async function addOptions(arr) {
	
	const cat = arr.find(element=>element.name==`Cat`)
			 
	for(let i=0; i< cat.people.length; i++){
		const id = await getId(cat.people[i]);
		const option = document.createElement('option');
		option.value = id;
		option.text = i+1;
		selectList.append(option);
	}
				
			
}

function selectedOption() {
	getInformation(selectList.value);
	renderCatPic();
}



// Выводим name, eye_color, gender, films
function setInformation(obj) {

	const intrestingKeys =["name","eye_colors","gender","films"]

	span.innerHTML = '';
	for (key in obj) {
		if (intrestingKeys.includes(key)) {
			let p = document.createElement('p');
			p.innerHTML = `<strong>${key}:</strong> ${obj[key]}`;
			span.append(p);
		}
	}
}

getAllChars();
selectList.addEventListener('change', selectedOption);