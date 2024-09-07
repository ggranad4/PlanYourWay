import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [appData, setAppData] = useState({});

    return (
        <AppContext.Provider value={{ appData, setAppData }}>
            {children}
        </AppContext.Provider>
    );
};