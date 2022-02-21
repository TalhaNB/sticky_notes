import Note from "./Note"
import AddNote from "./AddNote"

const NotesList = ({ notes, handleSaveClick, handleDelete }) => {
  return (
    <div className="notes-List">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}
      <AddNote handleSaveClick={handleSaveClick} />
    </div>
  )
}

export default NotesList
