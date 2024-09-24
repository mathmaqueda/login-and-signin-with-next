"use client";

import React, { createContext, useContext, useState } from 'react';

interface User {
    email: string;
    password: string;
}

// Interface de contexto do usuário para autenticar ou adicionar um novo
interface UserContextType {
    users: User[];
    addUser: (user: User) => void;
    authenticateUser: (email: string, password: string) => boolean;
}

// Cria o contexto do usuário
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    // Função para adicionar usuário ao array
    const addUser = (user: User) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    // Função para procurar usuário no array
    const authenticateUser = (email: string, password: string) => {
        return users.some(user => user.email === email && user.password === password);
    };

    return (
        <UserContext.Provider value={{ users, addUser, authenticateUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Função para utilizar o UserContext
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};