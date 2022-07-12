import { Route } from "wouter";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";

function App() {
  return (
    <UserContextProvider>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={HomePage} path="/" />
    </UserContextProvider>
  );
}

export default App;
