


import React , {useEffect, useRef, useState} from 'react'
import './Ref.css'

export const Ref = () => {

    const cardref = useRef()

    const handle = () => {
        if(cardref.current) {
            // cardref.current.style = 'background-color:green'
            cardref.current.classList.toggle ("highlight")
        }
    }



  return (

    <div className='text-center'>   

        <div ref={cardref}   className='card'>
            <h2> Interactive Card </h2>
            <p> Click the button to toggle the highlight! </p>

        </div>
            <button onClick={handle}>Toggle Highlight</button>
            
    </div>

  )
}
