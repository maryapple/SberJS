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
    .then((response) => {   
  		data.filter
  }) 
}

function getAllChars() {
  fetch('https://ghibliapi.herokuapp.com/species')
  .then(response => response.json())
  .then(data => console.log(data))
}

async function getData() {
	const arrayOfData = await getAllChars();
	// console.log(arrayOfData);
}

getData();