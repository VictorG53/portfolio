import { createContext, useContext } from 'react';
import { useState } from 'react';

const LoginContext = createContext();


export function AppWrapper({ children }) {
    const [value, setValue] = useState(false);

    return (
        <LoginContext.Provider value={{ value, setValue }}>
            {children}
        </LoginContext.Provider>
    );
}

export function useLoginContext() {
    return useContext(LoginContext);
}
