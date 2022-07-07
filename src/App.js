import { Route } from "wouter";
import "./App.css";
//import { UserContextProvider } from "./context/UserContext";
//import LoginPage from "./pages/login";
import HomePage from "./pages/home";
//import RegisterPage from "./pages/register";

function App() {
  return (

    
        
        <HomePage/>
        
      

      /*
      return (
        <UserContextProvider>
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={HomePage} path="/" />
        </UserContextProvider>
      );*/
    
/*

    <div className="App">
      <h2>Hola mundo</h2>

      <div className="App">
        <header className="App-header">

<div className="react-wrapper">
        {SECURITY.map(vid => 
        <ReactPlayer
        className="react-player"
            url={vid}
            playing={true}
            width={300}
            
          /> )}

          </div>
          
        </header>
      </div>
    </div>
  );*/
)}

export default App;
