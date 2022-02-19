class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h2>ENERGY RESOURCES - SCIENCE & ENGINEERING</h2>
            <select name="Language">
                <option value="English">English</option>
                <option value="Azerbaijani">Azerbaijani</option>
                <option value="Turkish">Turkish</option>
                <option value="Russian">Russian</option>
            </select>
        </header>
        `
    }
}

customElements.define('page-header',PageHeader)