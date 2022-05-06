class PhotoContainer extends HTMLElement {
    $container;
    $items;

    connectedCallback() {
        this.initElements();
        this.addItems();
        this.events();
    }

    initElements() {
        this.$container = document.createElement('ul');
        this.$container.id = 'PhotoContainer';
        this.replaceWith(this.$container);
    }

    async getImages() {
        return await fetch('./images.json');
    }

    addItems() {
        this.getImages().then(async res => {
            const items = await res.json();
            this.$container.innerHTML = items.map(item => this.createItem(item)).join('');
            this.$items = Array.from(this.$container.querySelectorAll('li'));
            this.setPhotoActive(this.$items[0]);
        });
    }

    setPhotoActive($el) {
        this.clearPhotoActive();
        $el.classList.add('active');
    }

    clearPhotoActive() {
        this.$items.forEach(item => item.classList.remove('active'));
    }

    events() {
        this.$container.addEventListener('click', ({target}) => {
            if (this.$items.includes(target)) {
                this.setPhotoActive(target);
            }
        })
    }

    createItem(item) {
        return `
            <li style="background-image:url('${item.src}')">
                <h3>${item.title}</h3>
            </li>
        `;
    }
}

window.customElements.define('photo-container', PhotoContainer);
