import React from "react";
import { BrowserRouter as Router,
    Route,
    Routes 
} from "react-router-dom";
import App from "../App";
import login from "./login";
import signup from "./signup";

function Aplicacion() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signup} />
      </Routes>
    </Router>
  );
}

export default Aplicacion;