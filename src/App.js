import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Resume from "./components/Resume.js";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Router>
    </div>
  );
}

export default App;
