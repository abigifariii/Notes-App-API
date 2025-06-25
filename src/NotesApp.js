import NotesAPI from "./services/NotesAPI"

class NotesApp {
  constructor() {
    this.api = new NotesAPI()
    this.notes = []
    this.archivedNotes = []
    this.currentCategory = "active"
    this.searchQuery = ""
  }

  async init() {
    this.setupEventListeners()
    await this.loadNotes()
  }

  setupEventListeners() {
    // Form submission
    document.addEventListener("addNote", async (e) => {
      await this.addNote(e.detail.title, e.detail.body)
    })

    // Category change
    document.addEventListener("categoryChange", (e) => {
      this.currentCategory = e.detail.category
      this.renderNotes()
    })

    // Search
    document.addEventListener("search", (e) => {
      this.searchQuery = e.detail.query.toLowerCase()
      this.renderNotes()
    })

    // Note actions
    document.addEventListener("deleteNote", async (e) => {
      await this.deleteNote(e.detail.id)
    })

    document.addEventListener("archiveNote", async (e) => {
      await this.toggleArchiveNote(e.detail.id)
    })
  }

  showLoading() {
    const loader = document.querySelector("loading-indicator")
    loader.show()
  }

  hideLoading() {
    const loader = document.querySelector("loading-indicator")
    loader.hide()
  }

  async loadNotes() {
    try {
      this.showLoading()
      const [activeNotes, archivedNotes] = await Promise.all([this.api.getAllNotes(), this.api.getArchivedNotes()])

      this.notes = activeNotes
      this.archivedNotes = archivedNotes
      this.renderNotes()
    } catch (error) {
      console.error("Failed to load notes:", error)
      alert("Failed to load notes. Please try again.")
    } finally {
      this.hideLoading()
    }
  }

  async addNote(title, body) {
    try {
      this.showLoading()
      await this.api.createNote(title, body)
      await this.loadNotes() // Reload to get updated data
    } catch (error) {
      console.error("Failed to add note:", error)
      alert("Failed to add note. Please try again.")
    } finally {
      this.hideLoading()
    }
  }

  async deleteNote(id) {
    try {
      this.showLoading()
      await this.api.deleteNote(id)
      await this.loadNotes() // Reload to get updated data
    } catch (error) {
      console.error("Failed to delete note:", error)
      alert("Failed to delete note. Please try again.")
    } finally {
      this.hideLoading()
    }
  }

  async toggleArchiveNote(id) {
    try {
      this.showLoading()
      const isArchived = this.archivedNotes.some((note) => note.id === id)

      if (isArchived) {
        await this.api.unarchiveNote(id)
      } else {
        await this.api.archiveNote(id)
      }

      await this.loadNotes() // Reload to get updated data
    } catch (error) {
      console.error("Failed to toggle archive status:", error)
      alert("Failed to update note. Please try again.")
    } finally {
      this.hideLoading()
    }
  }

  filterNotes(notes) {
    if (!this.searchQuery) return notes

    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.searchQuery) || note.body.toLowerCase().includes(this.searchQuery),
    )
  }

  renderNotes() {
    const activeContainer = document.getElementById("active-notes")
    const archivedContainer = document.getElementById("archived-notes")

    // Clear containers
    activeContainer.innerHTML = ""
    archivedContainer.innerHTML = ""

    // Filter notes based on search query
    const filteredActiveNotes = this.filterNotes(this.notes)
    const filteredArchivedNotes = this.filterNotes(this.archivedNotes)

    // Show/hide sections based on current category
    const activeSectionTitle = document.querySelector(".section-title")
    const archivedSectionTitle = activeSectionTitle.nextElementSibling.nextElementSibling

    if (this.currentCategory === "active") {
      activeSectionTitle.style.display = "block"
      activeContainer.style.display = "grid"
      archivedSectionTitle.style.display = "none"
      archivedContainer.style.display = "none"
    } else if (this.currentCategory === "archived") {
      activeSectionTitle.style.display = "none"
      activeContainer.style.display = "none"
      archivedSectionTitle.style.display = "block"
      archivedContainer.style.display = "grid"
    } else {
      activeSectionTitle.style.display = "block"
      activeContainer.style.display = "grid"
      archivedSectionTitle.style.display = "block"
      archivedContainer.style.display = "grid"
    }

    // Render active notes
    if (this.currentCategory === "active" || this.currentCategory === "all") {
      filteredActiveNotes.forEach((note) => {
        const noteElement = document.createElement("note-item")
        noteElement.setAttribute("title", note.title)
        noteElement.setAttribute("body", note.body)
        noteElement.setAttribute("created-at", note.createdAt)
        noteElement.setAttribute("note-id", note.id)
        noteElement.setAttribute("archived", "false")
        activeContainer.appendChild(noteElement)
      })
    }

    // Render archived notes
    if (this.currentCategory === "archived" || this.currentCategory === "all") {
      filteredArchivedNotes.forEach((note) => {
        const noteElement = document.createElement("note-item")
        noteElement.setAttribute("title", note.title)
        noteElement.setAttribute("body", note.body)
        noteElement.setAttribute("created-at", note.createdAt)
        noteElement.setAttribute("note-id", note.id)
        noteElement.setAttribute("archived", "true")
        archivedContainer.appendChild(noteElement)
      })
    }

    // Show empty state if no notes
    if (filteredActiveNotes.length === 0 && (this.currentCategory === "active" || this.currentCategory === "all")) {
      activeContainer.innerHTML = '<p class="empty-state">No active notes found.</p>'
    }

    if (filteredArchivedNotes.length === 0 && (this.currentCategory === "archived" || this.currentCategory === "all")) {
      archivedContainer.innerHTML = '<p class="empty-state">No archived notes found.</p>'
    }
  }
}

export default NotesApp
