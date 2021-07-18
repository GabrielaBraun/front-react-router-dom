import './App.css';
import { useState } from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Perfil from './Pages/Profile';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

function App() {
  const [estaLogado, setEstaLogado] = useState (false);

  function Bloquer (props){
    return (
      <Route 
      render = {() => estaLogado ? 
      (props.children) :
      <Redirect to="/login" />}
      />
    );
  }

  return (
    <div className="App">

        <Router>
          <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/perfil">Perfil</Link>
          </nav>
          <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Bloquer>
            <Route path="/perfil" component={Perfil} />
          </Bloquer>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
