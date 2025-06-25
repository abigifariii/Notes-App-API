class NotesAPI {
  constructor() {
    this.baseURL = "https://notes-api.dicoding.dev/v2"
  }

  async getAllNotes() {
    try {
      const response = await fetch(`${this.baseURL}/notes`)
      const data = await response.json()

      if (data.status === "success") {
        return data.data
      }
      throw new Error(data.message)
    } catch (error) {
      console.error("Error fetching notes:", error)
      throw error
    }
  }

  async getArchivedNotes() {
    try {
      const response = await fetch(`${this.baseURL}/notes/archived`)
      const data = await response.json()

      if (data.status === "success") {
        return data.data
      }
      throw new Error(data.message)
    } catch (error) {
      console.error("Error fetching archived notes:", error)
      throw error
    }
  }

  async createNote(title, body) {
    try {
      const response = await fetch(`${this.baseURL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      })

      const data = await response.json()

      if (data.status === "success") {
        return data.data
      }
      throw new Error(data.message)
    } catch (error) {
      console.error("Error creating note:", error)
      throw error
    }
  }

  async deleteNote(id) {
    try {
      const response = await fetch(`${this.baseURL}/notes/${id}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.status === "success") {
        return data.message
      }
      throw new Error(data.message)
    } catch (error) {
      console.error("Error deleting note:", error)
      throw error
    }
  }

  async archiveNote(id) {
    try {
      const response = await fetch(`${this.baseURL}/notes/${id}/archive`, {
        method: "POST",
      })

      const data = await response.json()

      if (data.status === "success") {
        return data.message
      }
      throw new Error(data.message)
    } catch (error) {
      console.error("Error archiving note:", error)
      throw error
    }
  }

  async unarchiveNote(id) {
    try {
      const response = await fetch(`${this.baseURL}/notes/${id}/unarchive`, {
        method: "POST",
      })

      const data = await response.json()

      if (data.status === "success") {
        return data.message
      }
      throw new Error(data.message)
    } catch (error) {
      console.error("Error unarchiving note:", error)
      throw error
    }
  }
}

export default NotesAPI
