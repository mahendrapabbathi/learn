import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const url = "https://unlockedu-backend-j24v.onrender.com";
    const [token,setToken] = useState("");

    // for do not change the sign out button when we refresh
    useEffect(() => {
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
      }
    }, [])
    

    const contextValue = {
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
