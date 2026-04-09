import { useContext } from "react";
import { AuthorizationContext } from "../authorization-provider";

export const Authorization = () => {
  const { name, isAuthorized, login, logout } =
    useContext(AuthorizationContext);
  let output;
  if (isAuthorized) {
    output = (
      <>
        <span>{name}</span>
        <button onClick={logout}>Logout</button>
      </>
    );
  } else {
    output = <button onClick={login}>Login</button>;
  }
  return output;
};
