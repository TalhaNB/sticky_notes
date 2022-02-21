import NotesList from "./components/NotesList"
import { useState } from "react"
import { nanoid } from "nanoid"

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is the note body",
      date: "Feb 15, 2021",
    },
    {
      id: nanoid(),
      text: "this is the Second note body",
      date: "Feb 16, 2021",
    },
    {
      id: nanoid(),
      text: "this is the Third note body",
      date: "Feb 17, 2021",
    },
    {
      id: nanoid(),
      text: "One more note",
      date: "Feb 17, 2021",
    },
  ])

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
    <div className="container">
      <NotesList
        notes={notes}
        handleSaveClick={addNotes}
        handleDelete={deleteNote}
      />
    </div>
  )
}

export default App
