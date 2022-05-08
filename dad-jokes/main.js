const loadJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {Accept: 'application/json'}
    }).then(async res => {
        const data = await res.json();
        document.querySelector('.joke').textContent = data.joke;
    });
}

document.querySelector('button').addEventListener('click', loadJoke);

loadJoke();
