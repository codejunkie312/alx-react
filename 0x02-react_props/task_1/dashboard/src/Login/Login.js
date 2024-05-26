import React from "react";
import './Login.css';

function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor='username'>Email: </label>
        <input type='text' id='username'></input>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password'></input>
        <input type='submit' value='OK'></input>
      </form>
    </div>
  );
}

export default Login;
