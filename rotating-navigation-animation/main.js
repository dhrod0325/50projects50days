const $page = document.querySelector('body');

document.querySelector('#open').addEventListener('click', e => {
    $page.classList.add('open');
});

document.querySelector('#close').addEventListener('click', e => {
    $page.classList.remove('open');
});
