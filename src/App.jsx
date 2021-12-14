import './App.css';

import { React } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login/Login.page.jsx';
import Signin from './pages/SignIn/Signin.page.jsx';
import Nav from './components/Nav/Nav.component';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.component';
import Store from './pages/Store/Store.page';
import About from './pages/About/About.page';
import Product from './pages/Product/Product.page';


function App() {
  return (
    <div className="App">
    <header className="App-header">
    <h1>Tema 9 - Peticiones a API Resful</h1>
    </header>
    <div className="general-container">
    <Router>
        <Nav />
        <div>
          <Route exact path={["/login","/"]} component={Login} />
          <Route exact path="/singin" component={Signin} />
          <ProtectedRoute exact path="/store" component={Store} />
          <ProtectedRoute exact path="/about" component={About} />
          <ProtectedRoute path="/product/:id" component={Product} />
        </div>
      </Router>
    </div>
  </div>
    
      
      
  );
}

export default App;