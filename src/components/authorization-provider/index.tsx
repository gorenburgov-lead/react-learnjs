import React from "react";

export const AuthorizationContext = React.createContext<{
  name?: string | null;
  isAuthorized?: boolean;
  login?: () => void;
  logout?: () => void;
}>({});
