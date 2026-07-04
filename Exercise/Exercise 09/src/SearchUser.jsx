
import { useState , useEffect } from "react";

const SearchUser = () => {

    const [ search , setSearch ] = useState('');
    const [ userData , setUserData ] = useState(null)
    const [ loading , setLoading ] = useState(false)
    const [ error , setError ] = useState('')

    useEffect(()=> {
        if (error) {
            console.error("Error Fetching GitHub User:", error)
        }
    },[error])

    const handleSearch = async () => {

        if(!search) return

        setLoading(true)
        setError('')
        setUserData(null)

        try {

            await new Promise ((resolve) => setTimeout (resolve, 1000))

            const response = await fetch (
                `https://api.github.com/users/${search.toLowerCase()}`
            )

            if(!response.ok){
                throw new Error ('GitHub user not found')
            }

            const data = await response.json();
            setUserData(data)

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return(

        <div>
            <h1>GitHub User Search</h1>
            <input 
                type="text"
                placeholder="Enter You GitHub Username"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {loading && <p>Loading...</p> }
            {error && <p style={{color:"red"}}>Error: {error}</p>}

            {
                userData && (
                    <div>
                        <h3>{userData.name || userData.login}</h3>
                        <img 
                            src={userData.avatar_url} 
                            alt={userData.login}
                            width="100"
                            style={{ borderRadius: '50%'}}
                        />
                        <p>Location: {userData.location || 'N/A'}</p>
                        <p>Puplic Repo: {userData.public_repos}</p>
                    </div>
                )
            }
        </div>
    )

}

export default SearchUser;