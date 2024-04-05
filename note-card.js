import "./main.js";

// Custom Element note-card
class NoteCard extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM for encapsulation (optional but recommended)
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (
      name === "title" ||
      name === "body" ||
      name === "createdAt" ||
      name === "archived"
    ) {
      this.render();
    }
  }

  static get observedAttributes() {
    return ["title", "body", "createdAt", "archived"];
  }

  render() {
    const shadow = this.shadowRoot; // Use shadow DOM if enabled
    if (!shadow) shadow = this; // Fallback to normal innerHTML

    shadow.innerHTML = `
      <style>
        .note-card {
          background-color: #C6EBC5;
          border-radius: 8px;
          margin-top: 10px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .note-title {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 8px;
        }

        .note-body {
          font-size: 16px;
          margin-top: 10px;
        }

        .note-meta {
          margin-top: 10px;
          font-size: 12px;
        }

        .note-archived {
          color: red;
          font-weight: bold;
          margin-left: 10px;
        }
      </style>
      <div class="note-card">
        <div class="note-title">${this.getAttribute("title")}</div>
        <div class="note-body">${this.getAttribute("body")}</div>
        <div class="note-meta">
          <span class="note-createdAt">${this.getAttribute("createdAt")}</span>
          <span class="note-archived">${this.getAttribute("archived") === "true" ? "Archived" : ""}</span>
        </div>
      </div>
    `;
  }
}

customElements.define("note-card", NoteCard);

