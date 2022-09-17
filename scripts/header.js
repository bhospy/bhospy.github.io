class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h2>FORMATION EVALUATION & RESERVOIR PERFORMANCE MONITORING</h2>
        </header>
        `
    }
}

customElements.define('page-header',PageHeader)