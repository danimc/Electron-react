//import { Route } from "wouter";
import { HashRouter, Route, Router } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";

function App() {
  return (
    <>
      <HashRouter path="/">
        <LoginPage />
      </HashRouter>
    </>
    /*
    <UserContextProvider>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={HomePage} path="/" />
    </UserContextProvider>
    */
  );
}

export default App;
