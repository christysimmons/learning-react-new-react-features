import React, {useState, useContext } from 'react';
import NotesContext from '../context/notes-context'

const NoteForm = () => {
    const { dispatch } = useContext(NotesContext);
    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE', 
            title,
            body
        })
        //This function is replaced by the useReducer function
        /*setNotes([
            ...notes,
            { title, body }
        ])*/
        setTitle('')
        setBody('')
    }
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    return(    
        <form onSubmit={addNote}>
            <p>Add a note:</p>
            <input value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}>
            </input>
            <br />
            <input value={body} placeholder="body" onChange={(e) => setBody(e.target.value)}>
            </input>
            <br />
            <button>Add note</button>
        </form>
    )
}

export default NoteForm;