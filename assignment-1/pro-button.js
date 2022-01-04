class ProButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      #info-box {
        display: none;
      }
    </style>

    <button>Show</button>
    <p id="info-box">
        <slot></slot>
    </p>
    `;

    this.isHidden = true;
    this._toggleButton = this.shadowRoot.querySelector("button");
    this._infoBox = this.shadowRoot.querySelector("p");

    this._toggleButton.addEventListener(
      "click",
      this._toggleInfoBox.bind(this)
    );
  }

  _toggleInfoBox() {
    this.isHidden = !this.isHidden;
    this._toggleButton.textContent = this.isHidden ? "Show" : "Hide";
    this._infoBox.style.display = this.isHidden ? "none" : "block";
  }
}

customElements.define("pro-button", ProButton);
