import './App.css';

import { React } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MensajesPage from './pages/Mensajes/Mensajes.page';
import Login from './pages/Login/Login.page.jsx';
import Signin from './pages/SignIn/Signin.page.jsx';
import Nav from './components/Nav/Nav.component';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.component';


function App() {
  return (
    <div className="App">
    <header className="App-header">
    <h1>Tema 8 - Sistema de enrutado en React</h1>
    </header>
    <div className="general-container">
    <Router>
        <Nav />
        <div>
          <Route exact path={["/login","/"]} component={Login} />
          <Route exact path="/singin" component={Signin} />
          <ProtectedRoute exact path="/MensajesPage" component={MensajesPage} />
        </div>
      </Router>
    </div>
  </div>
    
      
      
  );
}

export default App;