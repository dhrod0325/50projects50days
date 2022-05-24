document.querySelector('.textarea').addEventListener('keydown', e => {
    const $liList = document.querySelectorAll('.text-container li');
    const $textArea = e.target;

    setTimeout(() => {
        const words = $textArea.value.split(',').reduce((list, current) => {
            const value = current.trim();

            if (value) {
                list.push(value);
            }

            return list;
        }, []);

        const $textContainer = document.querySelector('.text-container');
        $textContainer.innerHTML = '';

        words.forEach(word => {
            const $li = document.createElement('li');
            $li.textContent = word;

            $textContainer.appendChild($li);
        })

    }, 10);
});
