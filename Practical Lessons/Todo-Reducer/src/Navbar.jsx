
import { UserProfile } from "./UserProfile"
import UserContext from "./UserContext"
import React , { useContext } from "react"

export const Navbar = () => {

    const user = useContext(UserContext)

  return (

    <div>
        <h4>Your {user.role} in Navbar;</h4>
        <UserProfile/>
    </div>

  )
}
