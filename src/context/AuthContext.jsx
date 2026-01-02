import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing session
        const savedUser = localStorage.getItem('fnf_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login logic - in a real app this would hit an API
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const mockUser = {
                        id: '123',
                        name: 'John Doe',
                        email: email,
                        points: 1250,
                        memberSince: '2024'
                    };
                    setUser(mockUser);
                    localStorage.setItem('fnf_user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject('Invalid credentials');
                }
            }, 800);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('fnf_user');
    };

    const updatePoints = (amount) => {
        setUser(currentUser => {
            if (currentUser) {
                const updatedUser = { ...currentUser, points: currentUser.points + amount };
                localStorage.setItem('fnf_user', JSON.stringify(updatedUser));
                return updatedUser;
            }
            return currentUser;
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, updatePoints }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
