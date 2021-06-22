import React, { createContext, useCallback, useState } from 'react';
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
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
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

  return (
    <AuthContext.Provider value={{ userWP: data.userWP, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
