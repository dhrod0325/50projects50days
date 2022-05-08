const labels = document.querySelectorAll('label');

Array.from(labels).forEach(item => {
    const txt = item.textContent.trim();

    item.innerHTML = '';

    txt.split('').forEach((t, idx) => {
        const span = document.createElement('span');
        span.textContent = t;
        span.style.transitionDuration = `${idx * 50}ms`;
        item.append(span);
    });
});
