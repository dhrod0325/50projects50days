class ProgressSteps extends HTMLElement {
    $container;
    $prevButton;
    $nextButton;
    $steps;

    currentStep = 0;

    connectedCallback() {
        this.initElements();
        this.initEvents();
        this.stepChanged();
    }

    initElements() {
        this.$container = document.createElement('div');
        this.$container.id = 'ProgressSteps';
        this.$container.innerHTML = this.template();

        this.$prevButton = this.$container.querySelector('.prev');
        this.$nextButton = this.$container.querySelector('.next');
        this.$steps = Array.from(this.$container.querySelectorAll('li'));

        this.replaceWith(this.$container);
    }

    initEvents() {
        this.$nextButton.addEventListener('click', () => {
            this.currentStep++;
            this.stepChanged();
        });

        this.$prevButton.addEventListener('click', () => {
            this.currentStep--;
            this.stepChanged();
        })
    }

    stepChanged() {
        this.$prevButton.disabled = false;
        this.$nextButton.disabled = false;

        if (this.currentStep === 0) {
            this.$prevButton.disabled = true;
        }

        if (this.currentStep === this.$steps.length - 1) {
            this.$nextButton.disabled = true;
        }

        this.$steps.forEach(item => item.classList.remove('active'));

        for (let i = 0; i < this.currentStep + 1; i++) {
            this.$steps[i].classList.add('active');
        }
    }

    template() {
        return `
                    <ol>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ol>
                    <div class="buttons">
                        <button type="button" class="prev">Prev</button>
                        <button type="button" class="next" disabled>Next</button>
                    </div>
            `;
    }
}

window.customElements.define('progress-steps', ProgressSteps);
