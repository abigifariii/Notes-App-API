class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.render()
    this.hide() // Initially hidden
  }

  render() {
    this.innerHTML = `
      <div class="loading-overlay">
        <div class="loading-spinner">
          <div class="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    `
  }

  show() {
    this.style.display = "flex"
  }

  hide() {
    this.style.display = "none"
  }
}

customElements.define("loading-indicator", LoadingIndicator)
