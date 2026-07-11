
import { useState , useReducer } from "react";

const DoubleCounter = () => {

    const intialState = { counterA : 0 , counterB : 0 } ;

    const reducer = ( state , action ) => {

        switch (action.type) {
            case 'increment_A' :
            return { ... state, counterA : state.counterA + 1}
            case 'Decrement_A' :
            return { ...state , counterA : state.counterA - 1}
            case 'increment_B' : 
            return { ... state, counterB : state.counterB + 1}
            case 'Decrement_B' :
            return { ...state, counterB : state.counterB - 1}
            case 'reset':
            return intialState;
            default : 
            return state;
            
        }
    }

    const [ state , dispatch ] = useReducer(reducer , intialState)

    return (

        <div>
            <h1>Double Counter</h1>
            <h3>Counter A:{state.counterA}</h3>
            <button onClick={ ()=> dispatch( { type : 'increment_A' })}>-A</button>
            <button onClick={()=> dispatch( { type : 'Decrement_A' })}>+A</button>

            <h3>Counter B:{state.counterB}</h3>
            <button onClick={()=> dispatch( { type : 'increment_B' })}>-B</button>
            <button onClick={()=> dispatch( { type : "Decrement_B" })}>+B</button>

            <button onClick={()=> dispatch( { type : 'reset'})}>Reset All</button>

        </div>
    )

}

export default DoubleCounter;