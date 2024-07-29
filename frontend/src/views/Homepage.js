import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Hello, welcome to Altos chat app!</h1>
        <p>
        The Real-Time Chat Application is designed to facilitate seamless and instant
         communication between users. This web-based application supports individual and group
          messaging, providing a user-friendly interface for sending text messages, sharing files, 
          and maintaining message history. The app ensures a secure and real-time chatting 
        experience with robust user authentication and data encryption
        </p>
       
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
   
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Company 2024</p>
  </footer>
</>

    </div>
  )
}

export default Homepage