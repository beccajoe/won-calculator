import React, { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const setLanguage = (newLanguage) => {
        setSelectedLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ selectedLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};