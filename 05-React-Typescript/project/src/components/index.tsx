import { useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { UserContext } from "./useContext/UserContext";

export const MainPage = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <Fragment>
      <div>{userInfo?.firstName}</div>
      <div>{userInfo?.lastName}</div>
      <div>{userInfo?.age}</div>
    </Fragment>
  );
};
