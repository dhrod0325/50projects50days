document.querySelectorAll('.up').forEach(el => {
    el.addEventListener('click', () => {
        el.parentElement.classList.add('collapse');
    });
});

document.querySelectorAll('.down').forEach(el => {
    el.addEventListener('click', e => {
        el.parentElement.classList.remove('collapse');
    });
});
