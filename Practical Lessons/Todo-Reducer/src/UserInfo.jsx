
import { useState } from "react";
// import { Header } from "./Header";
// import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";
import { ThemeComponent } from "./ThemeComponent";

const UserInfo = () => {

    const [ theme , setTheme ] = useState("light")
    
    const toggleTheme = () => {
        setTheme((prev) => ( prev === "light" ? "dark" : "light" ))
    }
    
    return (
        <ThemeContext.Provider value={theme}>
            <button 
                onClick={toggleTheme}>
                Swith to {theme === "light" ? "Dark" : "Light"}
            </button>

            <ThemeComponent />
        </ThemeContext.Provider>

    )
}

export default UserInfo;