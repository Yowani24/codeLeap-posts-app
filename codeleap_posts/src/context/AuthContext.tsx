import { createContext } from "react";
import type { ILoggedInUser } from "../service/data/user";

export interface AuthContextData {
  loggedInUser: ILoggedInUser | null;
  login: (username: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData | null>(null);
