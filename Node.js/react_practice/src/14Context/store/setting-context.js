import { createContext, useState } from 'react';

//context
const SettingContext = createContext({
    theme: '',
    language: '',
    setTheme: () => {},
    setLanguage: () => {},
})

//procider component
export function SettingProvider(props) {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] =useState('ko');

    return (
        <SettingContext.Provider value={{theme, language ,setTheme,setLanguage }}>
            {props.children}
        </SettingContext.Provider>
    )
}


export default SettingContext;