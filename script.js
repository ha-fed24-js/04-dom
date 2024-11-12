// console.log('Hello world!')

// document.getElementById
// . == klasser
// # == id
const first = document.querySelector('#first-container')
// console.log(first)
first.innerText = 'Hello world!'

const button = document.querySelector('#click-button')
const results = document.querySelector('#click-results')

let count = 0

button.addEventListener('click', (event) => {
	count++
	results.innerText = 'Antal klick: ' + count
	console.log('Event object: ', event)
})


// Plocka ut element från DOM
// Skapa event listener - koppla till <button>
// Skapa nytt <li> element varje gång man klickar
// Fyll <li> med innehåll - från <input>
// Lägg till <li> sist i <ul>

const input = document.querySelector('#cv-input')
const cvButton = document.querySelector('#cv-button')
const list = document.querySelector('#cv-list')

// console.log('DOM-objekt: ', input, cvButton, list)
cvButton.addEventListener('click', () => {
	// console.log('Klickade cv-button')
	const li = document.createElement('li')  // <li>
	li.innerText = input.value
	// console.log('Li: ', li)
	list.append(li)
})
