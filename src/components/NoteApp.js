import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotesContext from '../context/notes-context'

const NoteApp = () => {
    //The use state line below is replaced with usReducer.
    //useReducer takes two arguments, a function (usually the reducer function)
    //and the inital state - in this case, an empty array
    //useReducer returns an array, where arr[0] is the returned state item/object
    //and arr[1] is the dispatch function. The dispatch function aligns to a case
    //in the reducer function, which alters the state as described in the function's switch

    //const [notes, setNotes] = useState([]);

    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'));
        if(notes) {
            //The following line is replaced by the useReducer dispatch function
           // setNotes(storedNotes)

           dispatch({type: 'POPULATE_NOTES', notes})
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify( notes ))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
                <NoteList />
                <NoteForm />
        </NotesContext.Provider>
    )
}

export default NoteApp;

//NOTES

/*
const App = (props) => {

    const [count, setCount] = useState(props.count);
    const newCount = (e) => {
        e.preventDefault();
        setCount(e.target.elements.countPut.value);
    };

    useEffect(() => {
        console.log("useeffect runs now");
        document.title=count
    }, [count])


    return (
        <div>
            <p>The current count is {count}.</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>reset</button>
            <form onSubmit={newCount}>            
                <input 
                type="number" 
                name="countPut"
                ></input>
                <button>Update Count</button>
            </form>
            

        </div>
    )
};
*/
//Callback function used inline

/*const App = () => {
    const [count, setCount] = useState(10);
    return (
        <div>
            <p>The current count is {count}.</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}; */



//Callback function encased in a variable

/* 
const App = () => {
    const [count, setCount] = useState(10);
    const increment = setCount(count + 1);
    return (
        <div>
            <p>The current count is {count}.</p>
            <button onClick={increment}>+1</button>
        </div>
    )
};


*/

//Notes

/*

The useState hook: 

--Allows previously "stateless" functional components to get access to state 
through a simplified interface. 

--Takes two arguments: the original value of a piece of state,
and a callback function used to update the piece of state. The piece of state does not
need to be encased in an object - contrast to previous iteations where all state must be 
encased in the state object.

When naming a variable to invoke useState, you can use destructuring to name each part 
of the two-part array, and have easier access to the callback function. 

You can also use a variable name to separate the callback function, which may be useful in cases where
calling the function inline doesn't make sense, or is hard to parse. See other exampple, above.

*/

//UseEffect contans lifecycle method features previously only available to class-based
//components. It runs in the same way that componentDidMount and componentDidUpdate do,
//and offers this expanded functionality to functional components.
//It takes an optional second argument, an array, to limit its scope to the state pieces
//listed in the array.
//If the second argument is an empty array, useEffect will only run once. This is a useful
//analogue to componentDidMount.
//Can be called multiple times within the same component for different/same features.