import logo from './Holberton Logo.jpg';
import { getFooterCopy, getFullYear } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for='username'>Email: </label>
          <input type='text' id='username'></input>
          <label for='password'>Password:</label>
          <input type='password' id='password'></input>
          <input type='submit' value='OK'></input>
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
