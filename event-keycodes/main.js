const $key = document.querySelector('.key');
const $keyCode = document.querySelector('.key-code');
const $code = document.querySelector('.code');

document.addEventListener('keydown', e => {
    document.body.classList.add("key-pressed");
    $key.textContent = e.key;
    $keyCode.textContent = e.keyCode;
    $code.textContent = e.code;
});
