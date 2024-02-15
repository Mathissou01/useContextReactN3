import { createContext, useState } from "react";

export type User = {
  name: string;
  isAdmin: boolean;
};

export type UserContextType = {
  user: User | null;
  isAuth?: boolean;
  login: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  isAuth: false,
  login: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({
      name: "Raymond",
      isAdmin: true,
    });
  };

  const value = { user, login };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
