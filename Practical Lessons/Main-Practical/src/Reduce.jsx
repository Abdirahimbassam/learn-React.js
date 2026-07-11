
import { useState , useEffect , useReducer } from "react";


const Reduce = () => {

    const intialState  = { count : 0 }

    const reducer = ( state , action ) => {
       
        switch (action.type) {
            case 'increment' : 
                return { count : state.count + 1}
            case 'decrement' : 
            return { count : state.count - 1}
            case 'reset' :
            return intialState;
            default : 
                return state
        }
    }

    const [ count , setCount ] = useState(0)

    const [ state , dispatch ] = useReducer(reducer,intialState)

    return (

        <div>

            <h1>UseReducer</h1>
            <h4>Count: { state.count } </h4>

            <button onClick={()=> dispatch({type : 'decrement'})}>Deccrement</button>
           
            <button onClick={()=> dispatch({type : 'increment'})}>Increment</button>

            <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>

        </div>

    )
}

export default Reduce;