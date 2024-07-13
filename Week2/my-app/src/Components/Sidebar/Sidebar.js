import React from 'react'
import './Sidebar.css'
export default function Sidebar(props) {
    
  return (
    <div className='sidebar'>
      {/* toggle button */}
        <button onClick={props.toggleDarkMode}>Dark/Light</button>
        <button onClick={
            () => {
                // console log
                console.log('Add Note');
                props.addNote({
                    // random int 
                id: Math.floor(Math.random() * 1000),
                title: 'T '+ Math.floor(Math.random() * 1000),
                text: 'New Note Content'+ Math.floor(Math.random() * 10020)
                })
            }
        }>Add Note</button>
        {/* sidebar */}
    </div>
  )
}
