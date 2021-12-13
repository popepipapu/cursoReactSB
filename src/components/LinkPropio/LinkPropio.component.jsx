//funcionalidad para que se puedan pasar datos entre las rutas

export const LinkPropio = ({ clase, enlace, children }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, "", enlace);
        const navEvent = new PopStateEvent('cambioDeRuta');
        window.dispatchEvent(navEvent);
    };

    return (
        <a className={clase} href={enlace} onClick={onClick}>
            {children}
        </a>
    );
};