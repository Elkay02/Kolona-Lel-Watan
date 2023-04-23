import { createContext, useEffect, useState } from "react";
import axios from "axios";


// user context
export const AuthContext =  createContext()

export const AuthContextProvider = ({children})=>{
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null ));

  const login = async(inputs)=>{
    const res = await axios.post("/auth/login", inputs);
    res.data.isOrg = false;
    setCurrentUser(res.data);
  };

  const logout = async(inputs)=>{
    const res = await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (<AuthContext.Provider value={{currentUser, login, logout}}>
    {children}
    </AuthContext.Provider>
  );
};


// organization context

export const AuthContext2 =  createContext()

export const AuthContextProvider2 = ({children})=>{
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null ));

  const login = async(inputs)=>{
    const res = await axios.post("/auth2/login", inputs);
    res.data.isOrg = true;
    setCurrentUser(res.data);
  };

  const logout = async(inputs)=>{
    const res = await axios.post("/auth2/logout");
    setCurrentUser(null);
  };

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return( <AuthContext2.Provider value={{currentUser, login, logout}}>
    {children}
    </AuthContext2.Provider>);
};



