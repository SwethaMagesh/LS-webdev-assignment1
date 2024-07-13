import React from 'react'

import './Note.css'


    // use title and text from props / constructor

function Note(props) {
  return (
    <div className='note'>
        <h6>{props.note.title}</h6>
        <textarea class='note_text' defaultValue={props.note.text}></textarea>
        <button onClick={
            () => {
                props.deleteNote(props.note.id)
            } 
        }>Delete</button>
    </div>
  )
}
export default Note;
