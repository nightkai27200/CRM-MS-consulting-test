import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import api from "../api/api";


interface User {
  id: number;
  email: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login(data: LoginRequest): Promise<void>;
  logout(): void;
}


export const AuthContext = createContext<AuthContextType | null>(null);


interface AuthProviderProps {
  children: ReactNode;
}


export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<User | null>(null);


  const isAuthenticated = user !== null;


  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {

      api.get("/me")
        .then(response => {

          setUser(response.data.user);

        })
        .catch(() => {

          localStorage.removeItem("token");
          setUser(null);

        });

    }

  }, []);


  const login = async (data: LoginRequest) => {

    setUser({
      id: 1,
      email: data.email,
    });

  };


  const logout = () => {

    localStorage.removeItem("token");
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