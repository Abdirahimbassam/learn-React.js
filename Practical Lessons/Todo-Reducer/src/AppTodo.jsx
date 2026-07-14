
import React , { useReducer } from 'react'
import TodoContext from './TodoContext'
import { intialState , reducer } from './reducer'
import {TodoList} from './TodoList'
import {TodoForm} from './TodoForm'

export const AppTodo = () => {

    const [ state , dispatch ] = useReducer ( reducer , intialState)

  return (

    <TodoContext.Provider value={ { state , dispatch } }>
        <div>
            <h2>Todo App with Context and Reducer </h2>
                <TodoForm />
                <TodoList />
        </div>
    </TodoContext.Provider>

  )
}
