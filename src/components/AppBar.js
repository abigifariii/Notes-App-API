class AppBar extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
        <div class="app-bar__inner">
          <h1 class="app-bar__title">
            <i class="fas fa-book-open"></i> Notes App
          </h1>
          <div class="app-bar__actions">
            <button class="theme-toggle" aria-label="Toggle theme">
              <i class="fas fa-moon"></i>
            </button>
          </div>
        </div>
      </header>
    `

    // Add theme toggle functionality
    const themeToggle = this.querySelector(".theme-toggle")
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme")
      const icon = themeToggle.querySelector("i")
      if (document.body.classList.contains("dark-theme")) {
        icon.classList.replace("fa-moon", "fa-sun")
      } else {
        icon.classList.replace("fa-sun", "fa-moon")
      }
    })
  }
}

customElements.define("note-appbar", AppBar)
