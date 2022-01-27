import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

/*Paginas*/
import Login from './view/login'
import NovoUsuario from './view/usuario-novo'
import Home from './view/home'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/novousuario' component={NovoUsuario} />
    </Router>
  );
}

export default App;
