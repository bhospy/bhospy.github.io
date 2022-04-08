class PageSideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<nav class="sidebar">

  <button class="sidebar-toggle">{TOGGLE}</button>

  <div class="sidebar-links">

    <button class="sidebar-accordion">{ACCORDION}</button>

    <div class="sidebar-panel">
      <a href="#" class="sidebar-item" onclick="changeCanvasItem({INDEX})">{ITEM}</a>
    </div>

  </div>

</nav>
`
    }
}

// customElements.define('sidebar',PageSideBar)

function setSideBar(toggle,accordions,sideitems) {

    let text = "";

    text += `<button class="sidebar-toggle">${toggle}</button>`

    text += `<div class="sidebar-links">`

    for (let i = 0; i < accordions.length; i++) {
        text += `<button class="sidebar-accordion">${accordions[i]}</button>`;
        text += `<div class="sidebar-panel">`;
        text += `<a href="#" class="sidebar-item" onclick="changeCanvasItem(${i})">${sideitems[i]}</a>`;
        text += `</div>`;
    }

    text += `</div>`

    console.log(text);
}

let toggle = "bahar";

const accordions = ["plt-999","plt-666","plt-666"];

const sideitems = ["well-001","well-002","well-003"];

setSideBar(toggle,accordions,sideitems);