const $cards = document.querySelector('.cards');
const triggerBottom = window.innerHeight / 5 * 4;

[...Array(50).keys()].forEach(number => {
    const $li = document.createElement('li');
    $li.textContent = 'Content';
    $cards.append($li);
});

const scrollEvent = () => {
    const items = document.querySelectorAll('li');

    items.forEach(elem => {
        const boxTop = elem.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            elem.classList.add('show')
        } else {
            elem.classList.remove('show')
        }
    });
}

window.addEventListener('scroll', scrollEvent);

scrollEvent();
