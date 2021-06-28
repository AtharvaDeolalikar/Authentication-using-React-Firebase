import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";

function App() {    
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>   
    );
  }

export default App;
