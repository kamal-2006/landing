import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>
          DISCOVER <br />
          <i>the world</i>
       
        <nav>
          <ul>
            <li><button>Home</button></li>
            <li><button>About us</button></li>
            <li><button>Profile</button></li>
            <li><button>Sign up</button></li>
          </ul>
        </nav>
        </h1>
      </header>
      <div className="container">
        <div className="landing-page">
          <h2>Welcome to our Travel Site!</h2>
          <p>Plan your next adventure with us.</p>
        </div>
        <div className="login-page" id="login">
          <h2>Login</h2>
          <form className="login-form" action="#">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
