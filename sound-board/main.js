document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => {
        const elem = e.target;
        const text = elem.textContent;

        document.querySelectorAll('audio').forEach(audio => {
            audio.pause();
        })

        document.getElementById(text).play();
    })
});
