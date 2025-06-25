class SearchBox extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <div class="search-box">
        <div class="search-input">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search notes..." id="search-input">
        </div>
      </div>
    `

    const searchInput = this.querySelector("#search-input")
    searchInput.addEventListener("input", (e) => {
      const event = new CustomEvent("search", {
        detail: { query: e.target.value },
      })
      document.dispatchEvent(event)
    })
  }
}

customElements.define("note-search", SearchBox)
