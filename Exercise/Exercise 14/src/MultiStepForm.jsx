
import { useState , useReducer } from "react";

const intialState = {
    step: 1 ,
    firstName: '' ,
    lastName: '' ,
    email: '' ,
    phone: '',
}

const reducer = ( state , action ) => {
    switch ( action.type ) {
        case 'update_failed' :
            return { ...state , [action.failed] : action.value }
        case 'next_step' : 
            return { ...state , step: state.step + 1 }
        case 'prev_step' :
            return { ...state, step : state.step - 1 }
        case 'reste_all' : 
            return intialState;
        default :
            return state
    }
}

const MultiStepForm = () => {

    const [ state , dispatch ] = useReducer( reducer , intialState )

    const handleChange = (e) => {
        dispatch(
            {
                type: 'update_failed',
                failed: e.target.name,
                value: e.target.value
            }
        )
    }

    const nextStep = () => dispatch( { type: 'next_step' } )
    const prevStep = () => dispatch( { type: 'prev_step' } )
    const resetForm = () => dispatch( { type: 'reste_all' } )
    
    const handleSubmit = () => {
        alert('Form Submit Successfully')
        dispatch({
            type:"next_step"
        })
        // resetForm();
    }



    return (

        <div>
            <h1>Multi-Step Registration </h1>
            {/* step 1 */}
            {
                state.step === 1 && (
                    <div>
                        <h3>Step 1: Profile</h3>
                        <label>First Name:
                        <input 
                            type="text"
                            name="firstName"
                            value={state.firstName}
                            onChange={handleChange}
                        />
                        </label>
                        <br />
                        <label>Last Name:
                        <input 
                            type="text"
                            name="lastName"
                            value={state.lastName}
                            onChange={handleChange}
                        />
                        </label>
                        <br />
                        <button onClick={nextStep}>Next</button> 

                    </div>
                )
            }

            {/* step 2 */}
            {
                state.step === 2 && (
                    <div>
                        <h3>Step 2: Contact</h3>
                        <label>
                            Email:
                            <input 
                                type="email" 
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Phone:
                            <input 
                                type="phone" 
                                name="phone"
                                value={state.phone}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <button onClick={prevStep} >Back</button>
                        <button onClick={nextStep} >Next</button>
                    </div>
            
                )
            }

            {/* step 3 */}
            {
                state.step === 3 && (
                    <div>
                        <h3>Step 3: Review</h3>
                        <p>
                            <strong>First Name: { state.firstName} </strong>
                        </p>
                        <p>
                            <strong>Last Name: { state.lastName} </strong>
                        </p>
                        <p>
                            <strong>Email: { state.email} </strong>
                        </p>
                        <p>
                            <strong>Phone: { state.phone} </strong>
                        </p>
                        <p>
                            <strong>First Name: { state.firstName} </strong>
                        </p>
                        <button onClick={prevStep} >Back</button>
                        <button onClick={handleSubmit} >Confirm</button>
                    </div>
                )
            }

            {/* step > 3 */}
            {
                state.step > 3 && (
                    <div>
                        <h3>Form Completed</h3>
                        <button onClick={resetForm} >Start Over</button>
                    </div>
                )
            }
        </div>
    )

}

export default MultiStepForm;