import NotesList from "./components/NotesList"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import Search from "./components/Search"
import Header from "./components/Header"

const App = () => {
  const [searchText, setSearchText] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Add your own notes",
      date: "Feb 15, 2021",
    },
  ])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes))
  }, [notes])

  const addNotes = (text) => {
    const date = new Date()
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearching={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleSaveClick={addNotes}
          handleDelete={deleteNote}
        />
      </div>
    </div>
  )
}

export default App
