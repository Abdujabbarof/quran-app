import React, {createContext, useState} from "react";

export const LangContext = createContext()

export const LangProvider = (props) => {
    const [lang, setLang] = useState(true)

    return (
        <LangContext.Provider value={{lang, setLang}}>
            {
                props.children
            }
        </LangContext.Provider>
    )
}