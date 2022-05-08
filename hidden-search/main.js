const $container = document.querySelector('.hidden-search');

document.querySelector('button').addEventListener('click', () => {
    $container.classList.toggle('hidden');
});
