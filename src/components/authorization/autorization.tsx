import { useContext } from "react";
import { AuthorizationContext } from "../authorization-provider";

export const Authorization = () => {
  const { name, isAuthorized, login, logout } =
    useContext(AuthorizationContext);
  return isAuthorized ? (
    <>
      <span>{name}</span>
      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <button onClick={login}>Login</button>
  );
};
