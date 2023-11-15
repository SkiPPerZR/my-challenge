import React from 'react'

interface AuthContextProps {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>; 
}

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

interface ProfileDataProps {
    data: any;
    setData: React.Dispatch<React.SetStateAction<any>>; 
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

// interface ProfileDataContextProps {
//     data: any;
//     setData: React.Dispatch<React.SetStateAction<any>>;
// }

// export const ProfileDataContext = React.createContext<ProfileDataContextProps>({
//     data: '',
//     setData: () => {},
// });