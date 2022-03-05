import { useEffect, useState } from "react";
import NotesList from "./Component/NotesList";
import {nanoid} from 'nanoid'
import Search from "./Component/Search";
import Header from "./Component/Header";

const App=()=>{

  const [notes,setnotes]=useState([{
    id: nanoid(),
    text: "this is my first note!",

    date:"15/04/2022"
  },
  {
    id: nanoid(),
    text: "this is my second note!",

    date:"16/04/2022"
  },
  {
    id: nanoid(),
    text: "this is my third note!",

    date:"17/04/2022"
  }
]);


useEffect(()=>{
  const saveNotes=JSON.parse(localStorage.getItem('react-secratewatcher-data'));

  if(saveNotes){
    setnotes(saveNotes);
  }
},[])

//component did  Update   then store in local storag
useEffect(()=>{
  localStorage.setItem('react-secratewatcher-data',JSON.stringify(notes))},[notes]);
const [searchText,setSearchText]=useState('');
const [darkMode,setDarkMode]= useState(false);

const addNote = (text)=>{
  console.log(text);
  const date=new Date();
  const newNote ={
    id:nanoid,
    text:text,
    date:date.toLocaleDateString()
  }
  // const newNotes=[...notes,newNote]
  setnotes([...notes,newNote])
}

const deletNote=(id)=>{
 const newNotes= notes.filter((note)=>  note.id !==id);
  
  setnotes(newNotes);
  
}
  
  return (
    <div className={`${darkMode && 'dark-mode'}`}>

      <div className="container">
        <Header  handleToggleDarkMode={setDarkMode}/>
        <Search  handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=>{note.text.toLowerCase().includes(searchText)}
        )} handleAddNote={addNote} handleDeletNote={deletNote}/>
      </div>
    </div>
    )
};

export default App;