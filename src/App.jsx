import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About/About.page';
import Store from './pages/Store/Store.page';
import Product from './pages/Product/Product.page';
import Login from './pages/Login/Login.page.jsx';
import Signin from './pages/SignIn/Signin.page.jsx';
import Nav from './components/Nav/Nav.component';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.component';
import SessionContext from './redux/reducers/sessionReducer';
import './App.css';

export default function App() {
  const [session, setSession] = useState(false);
  const styleChange = useSelector(state => state).styleChange;

  return (
    <SessionContext.Provider value={{session,setSession}}>
      <div className={["App",styleChange ? 'nightBackground' : 'dayBackground'].join(' ')}>
        <header className="App-header">
          <h1>Tema 11 - Interfaces de usuario</h1>
        </header>
        <Router>
          <Nav />
          <div>
            <Route exact path={["/login", "/"]} component={Login} />
            <Route exact path="/singin" component={Signin} />
            <ProtectedRoute exact path="/store" component={Store} />
            <ProtectedRoute exact path="/about" component={About} />
            <ProtectedRoute path="/product/:id" component={Product} />
          </div>
        </Router>
      </div>
    </SessionContext.Provider>
  );
}