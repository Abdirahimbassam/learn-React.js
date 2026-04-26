
import UserCardUpdate from "./UserCardUpdate";

const App = () => {

    return(
      <>
          {/* person 1 */}
          <UserCardUpdate 
          name = {"HTML"}
          email = {"html@gmail.com"}
          />

          {/* person 2 */}
          <UserCardUpdate 
          name = {"CSS"}
          email = {"css@gmail.com"}
          />

          {/* person 3 */}
          <UserCardUpdate 
          name = {"JavaScript"}
          email = {"javascript@gmail.com"}
          />

          {/* person 4 */}
          <UserCardUpdate 
          name = {"React"}
          email = {"react@gmail.com"}
          />
          
      </>
      
    )
}

export default App;