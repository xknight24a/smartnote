import { useState } from "react";

const AddNote =({handleAddNote})=>{
    const [noteText, setNoteText] = useState('')

    const characterLimit = 200;
    
    const handlechange =(event)=>{
        //    console.log(event.target.value)
        if(characterLimit - event.target.value.length>=0)
        setNoteText(event.target.value);
        else {
            alert("Bag is full now please take new bag!")
        }
    }

    const handleSaveCLick=()=>{
        if(noteText.trim().length>0){
            
            handleAddNote(noteText)
            setNoteText('')
        }else{
            alert("Please write ")
        }
    }
    return (<div className="note new ">
        <textarea roes="8" cols="10" placeholder="Type to add a note.." onChange={handlechange} value={noteText} >
            
        </textarea>
        <div className="note-footer">
            <small>{characterLimit-noteText.length} Remaining</small>
            <button className="save" onClick={handleSaveCLick}>Save</button>
        </div>

    </div>)
}

export default AddNote;