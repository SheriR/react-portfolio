import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavTabs from "./components/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
