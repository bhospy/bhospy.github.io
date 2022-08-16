class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h2>FORMATION EVALUATION - ENGINEERING & MODELING</h2>
        </header>
        `
    }
}

customElements.define('page-header',PageHeader)