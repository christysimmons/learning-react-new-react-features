import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';


const Note = ({ note }) => {
        /* destructured from notesContext object*/
    const { dispatch } = useContext(NotesContext);

    const position = useMousePosition();
    return(
    //React fragments
    //Return an empty jsx element to remove the empty div and solve empty div problems
    <div>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>{position.x}, {position.y}</p>
        <button onClick={() => dispatch({type: 'REMOVE_NOTE', title: note.title})}>x</button>
    </div>
    )
}

export default Note;