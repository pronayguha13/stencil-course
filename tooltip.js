class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <slot></slot>
    <span> (?) </span>`;
  }

  connectedCallback() {
    const tootltipIcon = this.shadowRoot.querySelector("span");
    this._tooltipText = this.getAttribute("text");
    tootltipIcon.addEventListener("mouseenter", this._showTootltip.bind(this));
    tootltipIcon.addEventListener("mouseleave", this._hideTootltip.bind(this));
    this.shadowRoot.appendChild(tootltipIcon);
  }

  _showTootltip() {
    console.log("mouse entered...");
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTootltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define("tf-tooltip", Tooltip);
