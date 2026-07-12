
import { useState } from "react";
import { Header } from "./Header";
import UserContext from "./UserContext";

const UserInfo = () => {
  
    const [ user , setUser ] = useState( { name: 'MC' , role: 'admin' } ) 
  
      return (

          <UserContext.Provider value={user}>
               <h2>My Application Form</h2>
              <Header />
          </UserContext.Provider>
    )
}

export default UserInfo;