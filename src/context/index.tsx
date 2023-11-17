import React from 'react'
import { ISetting } from '../interfaces/ISettings';

interface AuthContextProps {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>; 
}

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

interface ProfileDataProps {
    data: ISetting;
    setData: React.Dispatch<React.SetStateAction<ISetting>>; 
}

export const ProfileData = React.createContext<ProfileDataProps>({} as ProfileDataProps);

interface TokenContextProps {
    isToken: any;
    setIsToken: React.Dispatch<React.SetStateAction<any>>; 
}

export const TokenContext = React.createContext<TokenContextProps>({
    isToken: '',
    setIsToken: () => {},
});

interface ImageContextProps {
    image: File | undefined;
    setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export const ImageContext = React.createContext<ImageContextProps>({} as ImageContextProps);