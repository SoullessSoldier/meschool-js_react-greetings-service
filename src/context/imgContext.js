import { createContext, useContext } from "react";
import { useImage } from "../hooks/useImage";
import { holidaysContext } from "./holidayContext";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {    
    const {holiday} = useContext(holidaysContext);
    const [img] = useImage(holiday);
    return (
        <imgContext.Provider value={{img}}>
            {children}
        </imgContext.Provider>
    )
}