
// import Greeting, {WelcomeMessage }  from "./Greeting"
// import Layout from "./Layout";
import Prop from "./Prop";


function App() {

    //   first react code jsx
    // return <h1>Hello, From React.js</h1>

    // className VS Class jsx
    // return <h1 className="title">Hello world from react</h1>

    // htmlFor vs. for jsx
    // return (

    //   <>
    //     <label htmlFor="username">Name:</label>
    //     <input type="text" id="username"/>

    //     <label htmlFor="email">Email:</label>
    //     <input type="text" id="email"/>

    //   </>
    // )

    // inline styles jsx
    // return <h1 style={ { backgroundColor:"brown", color:"white", padding:"10px", textAlign:"center"} }>Hello world from react</h1>

    // selfing closing tag jsx
    // return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1gyjb2rlgHkRZS3lhz81JGvy8Ktpz1b0bQ&s" />

     // JavaScript Expressions {} wax jawaab kaso baxaayo/result
    //  return <h1> {5+1} </h1>

    // const userName = "Bassam"

    // return <h1>{userName}</h1>

    // conditional statement jsx
    // const password = "1234"
    // // ternary operator
    // return (password === "123" ? "Welcome" : "Go back")
    // // only if condition
    // return (password === "123" && "Welcome")

    // list rendering jsx
    // const students = ["Abdirahim", "Bassam", "React.js",]
    // return ( 
    //   students.map(student => <h1>{student}</h1>)
    // ) 
    
    // fragments
    // return (
    //   <>
    //     <h1>Bassam</h1>
    //     <span>FrontEnd Developer</span>
    //   </>
    // )

    const currentUser = "Bassam"
    const role = "Admin"
    const age = "21"

    return (
     
      <>
      {/* <Greeting />
      <WelcomeMessage /> */}
      {/* <Layout /> */}

      <Prop 
      currentUser = {currentUser} 
      role = {role}
      age = {age}
      />


      </>
    )


}

export default App;