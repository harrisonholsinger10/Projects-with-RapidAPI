import { MY_API_KEY } from './config.js';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': MY_API_KEY,
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
    .then(response => response.json())
    .then(data => {
        const joke = data.body[0];
        const setup = joke.setup;
        const punchline = joke.punchline;
        document.getElementById('setup').innerHTML = `${setup}`;
        document.getElementById('punchline').innerHTML = `${punchline}`;
    })
    .catch(err => console.error(err));
