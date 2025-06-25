class NoteForm extends HTMLElement {
  connectedCallback() {
    this.render()
    this.setupValidation()
  }

  render() {
    this.innerHTML = `
      <form id="note-form">
        <div class="form-group">
          <label for="note-title">Title</label>
          <input type="text" id="note-title" placeholder="Note title" maxlength="50" required>
          <div class="char-counter"><span id="title-counter">0</span>/50</div>
        </div>
        
        <div class="form-group">
          <label for="note-body">Content</label>
          <textarea id="note-body" placeholder="Write your note here..." maxlength="1000" required></textarea>
          <div class="char-counter"><span id="body-counter">0</span>/1000</div>
        </div>
        
        <div class="form-actions">
          <button type="submit" class="primary">
            <i class="fas fa-plus"></i> Add Note
          </button>
          <button type="reset" class="secondary">
            <i class="fas fa-eraser"></i> Clear
          </button>
        </div>
      </form>
    `
  }

  setupValidation() {
    const form = this.querySelector("#note-form")
    const titleInput = this.querySelector("#note-title")
    const bodyInput = this.querySelector("#note-body")
    const titleCounter = this.querySelector("#title-counter")
    const bodyCounter = this.querySelector("#body-counter")

    // Character counters
    titleInput.addEventListener("input", () => {
      titleCounter.textContent = titleInput.value.length
      if (titleInput.value.length > 45) {
        titleCounter.classList.add("invalid")
      } else {
        titleCounter.classList.remove("invalid")
      }
    })

    bodyInput.addEventListener("input", () => {
      bodyCounter.textContent = bodyInput.value.length
      if (bodyInput.value.length > 950) {
        bodyCounter.classList.add("invalid")
      } else {
        bodyCounter.classList.remove("invalid")
      }
    })

    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      if (titleInput.value.trim() === "" || bodyInput.value.trim() === "") {
        alert("Please fill in all fields")
        return
      }

      const event = new CustomEvent("addNote", {
        detail: {
          title: titleInput.value.trim(),
          body: bodyInput.value.trim(),
        },
      })

      document.dispatchEvent(event)
      form.reset()
      titleCounter.textContent = "0"
      bodyCounter.textContent = "0"
    })
  }
}

customElements.define("note-form", NoteForm)
