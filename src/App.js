import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mentor from "./components/Mentor";
import Student from "./components/Student";
import Assignment from "./components/Assignment";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./pages/PageNotFound"
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer postition="top-right" theme="dark" />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/create-mentor">
            <Mentor />
          </Route>
          <Route exact path="/create-student">
            <Student />
          </Route>
          <Route exact path="/assign-student">
            <Assignment />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
