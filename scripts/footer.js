class PageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ul class="infobar">
                <li>Last Edited Feb-20, 2022</li>
            </ul>
        </footer>
        `
    }
}

customElements.define('page-footer',PageFooter)