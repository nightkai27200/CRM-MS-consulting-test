import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import api from "../api/api";


interface User {

  id: string;

  email: string;

  role: string;

}


interface LoginRequest {

  email: string;

  password: string;

}


interface LoginResponse {

  user: User;

  token: string;

}


interface AuthContextType {

  user: User | null;

  isAuthenticated: boolean;

  login(
    data: LoginRequest,
    rememberMe: boolean
  ): Promise<void>;

  logout(): void;

}


export const AuthContext =
createContext<AuthContextType | null>(null);



interface AuthProviderProps {

  children: ReactNode;

}



export function AuthProvider({
  children
}: AuthProviderProps) {


  const [user, setUser] =
    useState<User | null>(null);



  const isAuthenticated =
    user !== null;



  useEffect(() => {


    const token =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token");


    if (token) {


      api.get("/api/auth/me")

      .then(response => {


        setUser(response.data);


      })


      .catch(() => {


        localStorage.removeItem("token");

        sessionStorage.removeItem("token");

        setUser(null);


      });


    }


  }, []);




  const login = async (
  data: LoginRequest,
  rememberMe: boolean
) => {

  try {

    const response = await api.post<LoginResponse>(
      "/api/auth/login",
      data
    );

    const {
      user,
      token
    } = response.data;


    if (rememberMe) {

      localStorage.setItem(
        "token",
        token
      );

    } else {

      sessionStorage.setItem(
        "token",
        token
      );

    }


    setUser(user);


  } catch (error: any) {

    console.error(
      "Erreur login :",
      error.response?.data || error.message
    );

    throw error;

  }

};




  const logout = () => {


    localStorage.removeItem("token");

    sessionStorage.removeItem("token");


    setUser(null);


  };



  return (

    <AuthContext.Provider

      value={{

        user,

        isAuthenticated,

        login,

        logout,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}