import React, { createContext, useState, useEffect } from "react";
import { read_cookie } from "sfcookies";

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
 const [isLoggedIn , setIsLoggedIn]= useState(false)
  const [auth, setAuth] = useState("This is coming from Context JS");
  const API_URL = "https://comfortable-gold-belt.cyclic.app"
  
useEffect(()=>{
  const cookieCheck = read_cookie("login")
  if (cookieCheck === true) {
    setIsLoggedIn(true)
  }
},[])

  


  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, API_URL}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
