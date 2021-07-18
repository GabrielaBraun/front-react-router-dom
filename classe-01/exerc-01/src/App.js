import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Perfil from './Pages/Profile';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">

        <Router>
          <nav className="links">
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/perfil">Perfil</Link>
          </nav>
          <Switch>
          <Route path="/login" component={Login} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/" component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
