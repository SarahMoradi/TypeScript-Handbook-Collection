import { createContext } from "react";

export type UserInfoType = {
  firstName: string;
  lastName: string;
  age: number;
};

export type UserContextType = {
  userInfo: UserInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);
