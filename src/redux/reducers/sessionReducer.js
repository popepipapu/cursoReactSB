import React from 'react';

const SessionContext = React.createContext({
    session: true,
    setSession: () => {}
});

export default SessionContext;