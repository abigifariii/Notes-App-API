class CategoryList extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    const active = this.getAttribute("active") || "active"

    this.innerHTML = `
      <div class="category-list">
        <div class="category-item ${active === "active" ? "active" : ""}" data-category="active">
          <i class="fas fa-sticky-note"></i>
          <span>Active Notes</span>
        </div>
        <div class="category-item ${active === "archived" ? "active" : ""}" data-category="archived">
          <i class="fas fa-archive"></i>
          <span>Archived Notes</span>
        </div>
        <div class="category-item ${active === "all" ? "active" : ""}" data-category="all">
          <i class="fas fa-list"></i>
          <span>All Notes</span>
        </div>
      </div>
    `

    const categoryItems = this.querySelectorAll(".category-item")
    categoryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const category = item.dataset.category
        const event = new CustomEvent("categoryChange", {
          detail: { category },
        })
        document.dispatchEvent(event)

        // Update active state
        categoryItems.forEach((i) => i.classList.remove("active"))
        item.classList.add("active")
      })
    })
  }
}

customElements.define("note-category", CategoryList)
