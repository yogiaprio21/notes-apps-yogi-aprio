class CustomHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const template = `
      <style>
        h1 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
          font-size: 36px;
          justify-content: center;
          margin-right: 20px;
        }

      </style>
      <header class="jumbotron">
        <h1 class="jumbotron_title">Kata Note</h1>
      </header>
    `;

    const templateElement = document.createElement("template");
    templateElement.innerHTML = template;

    shadow.appendChild(templateElement.content.cloneNode(true));
  }
}

// Define the custom element
customElements.define("custom-header", CustomHeader);
