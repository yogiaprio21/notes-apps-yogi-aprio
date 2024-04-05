// Buat elemen custom "custom-footer"
class CustomFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const p = document.createElement("p");
    p.textContent = this.innerHTML;
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    p.style.margin = "20px 0";
    p.style.fontSize = "20px";
    shadow.appendChild(p);
  }
}

// Daftarkan elemen custom ke dalam DOM
customElements.define("custom-footer", CustomFooter);
