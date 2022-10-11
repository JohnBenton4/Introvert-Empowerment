import logo from "./logo.svg";
import "./App.css";
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" 
             alt="logo" />
          
<p>A simple React app.....</p>
  
       
        <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected</button>
        </form>
      </header>
    </div>
  );
}
  
export default App;