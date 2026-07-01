
import { useEffect, useState } from "react";

const Fetch = () => {

    const [ user , setUser ] = useState([]);
    const [ loading , setLoading ] = useState(false)

    useEffect(()=> {
       
        const fetchUser = async() => {
            
           setLoading(true)

            try {
                const response = await fetch ('https://jsonplaceholder.typicode.com/users')    
                const data = await response.json()
                
                setUser(data)
                setLoading(false)
            } catch (error) {
                console.error("error", error)
            }

        }

        fetchUser()
    },[])

   if(loading) return <h1>Loading...</h1>

    return (
        <div>
           <h2>List of Users:</h2>
           <ul>
                {
                    user.map((u)=> (
                        <li>{u.name}</li>
                    ))
                }
           </ul>
        </div>
    )
}

export default Fetch;