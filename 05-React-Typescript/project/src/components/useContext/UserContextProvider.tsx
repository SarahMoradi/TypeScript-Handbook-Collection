import React, { useState } from "react";
import { UserContext, type UserInfoType } from "./UserContext";

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState({} as UserInfoType);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
