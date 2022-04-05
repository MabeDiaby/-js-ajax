const url = "https://pokeapi.co/api/v2/pokemon/"


let button = document.querySelector('#searchButton');
let textInput = document.querySelector('#inputBar').value;
let PokeBtn = document.getElementsByClassName("poke-btn")
console.log(button);


// async function getData (event) {
    button.addEventListener('click', event => {
        event.preventDefault()
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log('success', res);
        })
        .catch(err => {
            console.log('something went wrong...oh no', err);
        })
})

// }