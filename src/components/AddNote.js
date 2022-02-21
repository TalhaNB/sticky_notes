import { useState } from "react"

const AddNote = ({ handleSaveClick }) => {
  const [noteText, setNoteText] = useState("")
  const charLimit = 200

  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleSaveClick(noteText)
      setNoteText("")
    }
  }

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type here..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  )
}

export default AddNote
