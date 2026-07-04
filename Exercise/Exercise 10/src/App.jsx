
import UserList from "./UserList"

const App = () => {

    const users = [
        { id: 1 , name: "Bassam" , email: "bassam@gmail.com" },
        { id: 2 , name: "Abdirahim" , email: "Abdirahim@gmail.com" },
        { id: 3 , name: "Abdullahi" , email: "Abdullahi@gmail.com" },
    ]

    return(
        <div>
            < UserList users = {users} />
        </div>
    )
}

export default App;