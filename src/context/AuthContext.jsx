import { createContext, useContext, useEffect, useState } from "react";
import {
  login as loginService,
  register as registerService,
  logout as logoutService,
  getCurrentUser,
} from "../services/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
    try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
    } catch (error) {
        setUser(null);
    } finally {
        setLoading(false);
    }
    };

    const login = async (email, password) => {
        const currentUser = await loginService(email, password);
        setUser(currentUser);
        return currentUser;
    };

    const register = async (email, password, name) => {
        const currentUser = await registerService(email, password, name);
        setUser(currentUser);
        return currentUser;
    };

    const logout = async () => {
        await logoutService();
        setUser(null);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const value = {
        user,
        loading,
        login,
        register,
        logout,
    };

    if (loading) {
    return (
        <div className="loading-screen">
            Loading...
        </div>
    );
}

    return (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
);
}

export const useAuth = () => {
  return useContext(AuthContext);
};