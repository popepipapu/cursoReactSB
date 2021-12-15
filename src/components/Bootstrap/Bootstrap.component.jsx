import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { cambiarStyle } from '../../redux/actions/styleChange.js';

export default function Bootstrap() {
    const styleChange = useSelector(state => state).styleChange;
    const dispatch = useDispatch();
    let setDia = () => {
        dispatch(cambiarStyle(!styleChange));
    }

    let texto = styleChange ?
        (<div><FontAwesomeIcon icon={faSun} className='dayMode'/>Modo diurno</div>):
        (<div><FontAwesomeIcon icon={faMoon} className='nightMode' />Modo nocturno</div>) ;

    return (
        <button className={["btn btn-sm",styleChange ? 'nightMode' : 'dayMode'].join(' ')} onClick={() => setDia(!styleChange)}>{texto}</button>
    );
}