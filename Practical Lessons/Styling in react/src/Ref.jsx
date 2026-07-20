


import React , {useEffect, useRef, useState} from 'react'

export const Ref = () => {

    const [ count , setCount ] = useState(0)
    const countPrev = useRef()

    useEffect(()=> {
        countPrev.current = count
    },[count])

  return (

    <div>
            <h2>Count: {count} </h2>
            <h2>PrevCount: {countPrev.current} </h2>
            <button onClick={()=> setCount(count+1)}>Increament</button>
    </div>

  )
}
