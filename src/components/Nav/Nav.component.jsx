import './Nav.component.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutSession } from '../../redux/actions/session';
import  { useHistory  } from 'react-router-dom';

export default function Nav() {
  const session = useSelector(state => state).session;
  const dispatch = useDispatch();
  const history = useHistory();
  let cerrar = () => {
    dispatch(logOutSession());
    let path = `login`; 
    history.push(path);
  }
  return (
    <div className="Nav">
        <Link className="Nav-link" to='/MensajesPage'>Mensajes</Link>
        <Link className="Nav-link" to='/'>Login</Link>
        {session && <button onClick={cerrar}>Cerrar sesión</button>}
    </div>
  );
}