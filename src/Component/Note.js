import {MdDeleteForever} from 'react-icons/md'
import '../index.css';
const Note=({id,text,date,handleDeletNote})=>{
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
            
            
               <MdDeleteForever onClick={()=>{
                   handleDeletNote(id)
               }} className="delete-icon" size='1.3em'/>
         
         
            </div> {
         
           
        }
      
        </div>
    )
};


export default Note;