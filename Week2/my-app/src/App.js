import React from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
// import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  // store and retreive notes from local storage
  const [notes, setNotes] = React.useState( JSON.parse(localStorage.getItem('notes-app')) || []) ;
  // mode dark/light
  const [mode, setMode] = React.useState(false);

  const toggleDarkMode = () => {
    console.log("toggle mode", mode);
    setMode(!mode);
  }

  // add note
  const addNote = (note) => {
    const tempNotes = [...notes, note];
    // console.log(tempNotes);
    setNotes(tempNotes);
    
    localStorage.setItem('notes-app', JSON.stringify(tempNotes));
  }

  // delete note
  const deleteNote = (id) => {
    let tempNotes = [...notes];
    tempNotes = tempNotes.filter((note) => note.id !== id);
    setNotes(tempNotes);
  }

  // use effect 
  React.useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));
    console.log('use effect', notes );
  }, [notes]);
  return (
    // add class if mode is true and else add another class if false
    
    <div className={`App  ${mode ? 'dark' : 'light'}`}>
       
       <header> <Sidebar addNote={addNote} toggleDarkMode ={toggleDarkMode}/></header>
        <NoteContainer 
        notes={notes}
        deleteNote={deleteNote}
        mode={mode}
        />
        
    </div>
  );
}

export default App;
