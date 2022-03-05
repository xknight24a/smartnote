import Note from './Note'
import '../index.css'
import AddNote from './AddNote'
const NotesList =({notes,handleAddNote,handleDeletNote})=>{


    return (
        <div className = 'notes-list'>
            {notes.map((note)=>{
               return <Note id={note.id} text={note.text} date={note.date} handleDeletNote={handleDeletNote}/>
            })}
           <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList;