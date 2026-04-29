
import { useState } from "react";

const TodoList = () => {

    const [ todos, setTodos ] = useState([])
    const [ inputValue, setInputValue ] = useState("")

    const handleTodoAdd = () => {

        if( inputValue.trim() !== "") {

            const newTodo = {
            id: crypto.randomUUID(),
            text: inputValue,
            completed: false
        }
        setTodos([...todos, newTodo])
        setInputValue('')

        }
        
    }
    
    return (

        <div>
            <h1> TO-DO List</h1>
            <input 
                type="text" 
                placeholder="Enter a new to-do"
                onChange={(e) => setInputValue(e.target.value)} 
                value={inputValue}
            />
            <button onClick={handleTodoAdd}>Add</button>

            <ul>
                {
                    todos.map( todo => (
                        <li> {todo.text } </li>
                    ))
                }
            </ul>
        </div>

    )
    
}

export default TodoList;