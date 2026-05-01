import { useState, type ReactNode } from "react";
import { AuthorizationContext } from ".";

const MOCK_NAME = "Mock";

export const AuthorizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [name, setName] = useState<string | null>(null);
  const login = () => setName(MOCK_NAME);
  const logout = () => setName(null);
  const isAuthorized = name !== null;
  return (
    <AuthorizationContext value={{ name, isAuthorized, login, logout }}>
      {children}
    </AuthorizationContext>
  );
};
