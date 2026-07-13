
import { useState , useEffect } from "react";

const UseFetch = (url) => {

    const [ data , setData ] = useState(null)
    const [ loading , setLoading ] = useState(true)
    const [ error , setError ] = useState(null)
    
    useEffect(()=> {
    
        let isMounted = true;
    
        const fetchData = async () => {
    
            try {
        
                const response = await fetch (url)
            
                if(!response.ok) {
                    throw new Error (`HTTPS Fetch Error status: ${response.status}`)
                }
                
                const result = await response.json()
            
                if(isMounted) {

                    setData(result)
                    setLoading(false)
                }
                    
            } catch (error) {
    
                    if(isMounted) {
                        setError(null)
                        setLoading(false)
                    }
                }
        } 
    
            fetchData();
    
            return () => {
                isMounted = false;
            }
            
    },[url])

    return { data , loading , error}
}

export default UseFetch;