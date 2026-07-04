
import { useState , useEffect } from "react";

const LoginForm = () => {

    const [ username , setUsername ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ isLoggin , setIsLoggin ] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        if ( username && password) {
            setIsLoggin(true)
        }
    }

    const handleLogout = () => {
        setUsername('')
        setPassword('')
        setIsLoggin(false)
    }

    if ( isLoggin ) {
        return (
            <div>
                <h1>Welcome {username}</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div>
                <label>Username:
                     <input 
                        type="text"
                        required
                        onChange={(e)=> setUsername(e.target.value)}
                        value={username}
                    />
                </label>
            </div>

            <div>
                <label>Password:
                        <input 
                            type="password"
                            required
                            onChange={(e)=> setPassword(e.target.value)}
                            value={password}
                        />
                </label>
            </div>
            <button type="submit">Login</button>
        </form>
      
    )
}

export default LoginForm;