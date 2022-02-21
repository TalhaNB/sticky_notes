import { MdDeleteForever } from "react-icons/md"

const Note = ({ id, text, date, handleDelete }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3rem"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  )
}

export default Note
