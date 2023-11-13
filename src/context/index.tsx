import {createContext} from 'react'

interface AuthContextProps {
    isAuth: boolean;
    setIsAuth: any; 
}

interface UserTokenProps {
    token: any;
    setToken: any;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const UserToken = createContext<UserTokenProps>({} as UserTokenProps);