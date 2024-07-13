import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'

export default function NoteContainer(props) {
    const reverArray = (arr) => {
        var temp = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            temp.push(arr[i]);
        }
        return temp;
    }
    // reverse the array of notes
    const notes = reverArray(props.notes);

  return (
    <div className={`NoteContainer  ${props.mode ? 'dark' : 'light'}`}>
    <div className='nheader'><h1 >Notes</h1></div>
      <div className='note-container-box'>
        {/* array of notes */}
        {notes?.length > 0 ? (
            notes.map((note) => (
                <Note 
                    key={note.id}
                    note={note}
                    deleteNote={props.deleteNote}
                />
            ))
        ) : (
            <h3>No notes found</h3>
        )}

        </div>
    </div>
  )
}
