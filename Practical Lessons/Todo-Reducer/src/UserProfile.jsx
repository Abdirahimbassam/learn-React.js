
import React , {useContext} from 'react'
import UserContext from './UserContext'

export const UserProfile = () => {

    const user = useContext(UserContext)

  return (

    <div>
        <h3>User Profile:</h3>
         <p>[user.name - user.role]</p>
    </div>

  )
}
