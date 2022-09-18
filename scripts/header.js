class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h2>ENGINEERING & MODELING PORTFOLIO</h2>
        </header>
        `
    }
}

customElements.define('page-header',PageHeader)