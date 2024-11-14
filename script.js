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


// Whack-a-mole
// plocka ut elementen
// variabel som kommer ihåg vilket hål som är aktivt
// event listener som lyssnar när musen går in över ett element (inte klick)
// slumpa ett nytt hål

const holes = Array.from( document.querySelectorAll('.hole') )
let moleIndex = 0  // här finns mullvaden just nu - börjar på index 0

holes.forEach((hole, index) => {
	hole.addEventListener('mouseenter', () => {
		if( moleIndex === index ) {
			// slumpa ny position
			// ta bort klassen .mole från aktuella hålet
			// lägg till .mole i annat hål
			hole.classList.remove('mole')

			let newPosition
			do {
				// Slumpa en position, tills det inte är samma
				newPosition = Math.floor(Math.random() * holes.length)
			} while( newPosition === moleIndex );
			moleIndex = newPosition

			holes[moleIndex].classList.add('mole')
		}
	})
})

// for( let index=0; index < holes.length; index++ ) {
// 	let hole = holes[index]
// 	// ...
// 	index++
// }