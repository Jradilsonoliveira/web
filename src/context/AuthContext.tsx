import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/apiClient';

type User = {
  id: string;
  name: string;
  email: string;
};

interface AuthState {
  userWP: User;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  userWP: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CardapioDigital:token');
    const userWP = localStorage.getItem('@CardapioDigital:user');

    if (token && userWP) {
      return { token, userWP: JSON.parse(userWP) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { userWP, token } = response.data;

    console.log(response.data);

    localStorage.setItem('@CardapioDigital:token', token);
    localStorage.setItem('@CardapioDigital:user', JSON.stringify(userWP));

    setData({ token, userWP });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CardapioDigital:token');
    localStorage.removeItem('@CardapioDigital:user');
  }, []);

  return (
    <AuthContext.Provider value={{ userWP: data.userWP, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
