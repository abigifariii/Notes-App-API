class NoteItem extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    const title = this.getAttribute("title") || ""
    const body = this.getAttribute("body") || ""
    const createdAt = this.getAttribute("created-at") || new Date().toISOString()
    const noteId = this.getAttribute("note-id") || ""
    const isArchived = this.getAttribute("archived") === "true"

    this.innerHTML = `
      <div class="note-item">
        <h3 class="note-title">${title}</h3>
        <p class="note-body">${body}</p>
        <p class="note-date">${this.formatDate(createdAt)}</p>
        <div class="note-actions">
          <button class="${isArchived ? "primary" : "secondary"}" id="archive-btn">
            <i class="fas ${isArchived ? "fa-undo" : "fa-archive"}"></i>
            ${isArchived ? "Unarchive" : "Archive"}
          </button>
          <button class="danger" id="delete-btn">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    `

    // Add event listeners
    const archiveBtn = this.querySelector("#archive-btn")
    const deleteBtn = this.querySelector("#delete-btn")

    archiveBtn.addEventListener("click", () => {
      const event = new CustomEvent("archiveNote", {
        detail: { id: noteId },
      })
      document.dispatchEvent(event)
    })

    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this note?")) {
        const event = new CustomEvent("deleteNote", {
          detail: { id: noteId },
        })
        document.dispatchEvent(event)
      }
    })
  }

  formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }
}

customElements.define("note-item", NoteItem)
