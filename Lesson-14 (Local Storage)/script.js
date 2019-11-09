/* Работа с хранилищами. 

При изменении инпутов цвет (id="bgcolor") сохраняется в LocalStorage, 
а имя (id="name") в SessionStorage. 
При заходе (обновлении) на страницу ищем значение цвета 
в локальном хранилище, если находим -устанавливаем стили 
( красим блок wrapper в любимый цвет).
Напоминание: кнопка "run with js" эмулирует нажатие f5

*/

const bgcolorForm = document.getElementById('bgcolor');
const nameForm = document.getElementById('name');
const wrapper = document.getElementById('wrapper');
const elem = document.createElement('p')
document.body.appendChild(elem)

function populateStorage(e) {
    /* запихиваем данные в хранилища */
    localStorage.setItem('color', e.target.value )
    setStyles()
}

function setName() {
    elem.textContent = sessionStorage.getItem('name')
}

function nameToStorage(e) {
    sessionStorage.setItem('name', e.target.value)
    setName()
}

function setStyles() {
    wrapper.style.background = localStorage.getItem('color')
}

bgcolorForm.addEventListener('change', populateStorage)
nameForm.addEventListener('input', nameToStorage)