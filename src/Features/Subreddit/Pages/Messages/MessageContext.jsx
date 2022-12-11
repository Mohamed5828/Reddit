import { useState , useContext } from "react";

const MessageContext = React.createContext()
const MessageUpdateContext = React.createContext()

export function MessageProvider({children}){    
    const [eachMessage , setEachMessage] = useState()

    return (
        <MessageContext.Provider value={}>
            <MessageUpdateContext.Provider value={}>
                {children}
            </MessageUpdateContext.Provider>
        </MessageContext.Provider>
    )
}