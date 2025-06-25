import "./styles/main.css"
import "./components/LoadingIndicator"
import "./components/AppBar"
import "./components/Search"
import "./components/Category"
import "./components/Form"
import "./components/NoteItem"
import NotesApp from "./NotesApp"

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  const app = new NotesApp()
  app.init()
})
