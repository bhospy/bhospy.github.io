class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h2>ENERGY RESOURCES - SCIENCE & ENGINEERING</h2>
            <select name="Language">
                <option value="Azerbaijani">English</option>
                <option value="Turkish">Azerbaijani</option>
                <option value="English">Turkish</option>
                <option value="Russian">Russian</option>
            </select>
        </header>
        `
    }
}

customElements.define('page-header',PageHeader)