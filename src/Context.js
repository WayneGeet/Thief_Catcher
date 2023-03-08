import {useState, createContext} from "react";

export const IpContext = createContext();

export function IpProvider({children}){
    
    const [ip, setIp] = useState("8.8.8.8")
    return(
        <IpContext.Provider value={[ip, setIp]}>
            {children}
        </IpContext.Provider>
    )
}