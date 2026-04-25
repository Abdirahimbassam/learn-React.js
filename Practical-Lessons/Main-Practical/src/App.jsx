
function App() {

    //   first react code jsx
    // return <h1>Hello, From React.js</h1>

    // className VS Class jsx
    // return <h1 className="title">Hello world from react</h1>

    // htmlFor vs. for jsx
    return (

      <>
        <label htmlFor="username">Name:</label>
        <input type="text" id="username"/>

        <label htmlFor="email">Email:</label>
        <input type="text" id="email"/>

      </>
    )
}

export default App;