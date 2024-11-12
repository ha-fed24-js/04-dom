console.log('Hello world!')

// document.getElementById
// . == klasser
// # == id
const first = document.querySelector('#first-container')
console.log(first)
first.innerText = 'Hello world!'

const button = document.querySelector('#click-button')
const results = document.querySelector('#click-results')
button.addEventListener('click', () => {
	results.innerText = 'Antal klick: ' + 1
})
