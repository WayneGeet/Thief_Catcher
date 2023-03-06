import {useState, createContext} from "react";

export const IpContext = createContext();

export function IpProvider({children}){
    const [ip, setIp] = useState("192.168.137.117")
    return(
        <IpContext.Provider value={[ip, setIp]}>
            {children}
        </IpContext.Provider>
    )
}