
import React , { useState , useContext } from 'react'
import TodoContext from './TodoContext'

export const TodoForm = () => {

    const [ text , setText ] = useState('')

    const { dispatch } = useContext(TodoContext)

    const handleAdd = () => {
        
        if(text.trim()) {
            
            const newTodo = {
                id: Date.now(),
                text,
                completed: false
            }

            dispatch ( { type: 'add' , payload: newTodo})
            setText('')
        }
    }

    return (

        <div>
            
            <input 
                type="text" 
                placeholder="Enter a new Todo"
                value={text}
                onChange={(e)=> setText(e.target.value)}
             />
            <button onClick={handleAdd}>Add</button>

        </div>
    )

}
