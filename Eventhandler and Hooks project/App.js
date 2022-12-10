import React, {useState} from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showpassword, setShowpassword] = useState(false);

  return (
    <div className="App">
      <h1>React hooks and Event handler practice</h1>
       
      <input type="text"  
             placeholder='Enter username' 
             value= {username} 
             onChange={(e) => { setUsername(e.target.value)}}
      />

      <br></br>

      <input type={showpassword ? "text" : "password"}  
             placeholder='Enter password' 
             value= {password} 
             onChange={(e) => { setPassword(e.target.value)}}
      />
      <h2> {username} </h2>
      <h2> {showpassword ? password : "*".repeat(password.length)} </h2>
      <button onClick={(e) => {setShowpassword(!showpassword)}}> Show/Hide password </button>
    </div>
  );
}

export default App;

