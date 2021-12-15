import './Nav.component.css';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import SessionContext from '../../redux/reducers/sessionReducer';
import Bootstrap from '../Bootstrap/Bootstrap.component';

export default function Nav() {
  const { session, setSession } = useContext(SessionContext);
  const styleChange = useSelector(state => state).styleChange;
  const history = useHistory();
  let cerrar = () => {
    setSession(false);
    let path = `login`;
    history.push(path);
  }
  return (
    <nav className={["navbar navbar-expand-lg bg-lightsticky-top", styleChange ? 'navbar-dark bg-dark' : 'navbar-light bg-light'].join(' ')}>
      <div className="container-fluid">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to='/store'>Tienda</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/about'>Sobre Nosotros</Link></li>
        </ul>
        <div>
          <Bootstrap/>
          {session && <button className="btn btn-sm btn-outline-secondary" onClick={cerrar}>Cerrar Sesión</button>}
        </div>
      </div>
    </nav>
  );
}