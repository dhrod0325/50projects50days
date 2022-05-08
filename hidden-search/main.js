const $container = document.querySelector('.hidden-search');

document.querySelector('button').addEventListener('click', () => {
    if ($container.classList.contains('hidden')) {
        $container.classList.remove('hidden');
    } else {
        $container.classList.add('hidden');
    }
});
