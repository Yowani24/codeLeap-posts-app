// import { useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import type { ILoggedInUser } from "../service/types/user";
// import { USERS } from "../service/data/user";

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [loggedInUser, setLoggedInUser] = useState<ILoggedInUser | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedInUser");
//     if (storedUser) {
//       setLoggedInUser(JSON.parse(storedUser));
//     }
//   }, []);

//   function login(username: string): boolean {
//     const user = USERS.find(
//       (u) => u.name.toLowerCase() === username.trim().toLowerCase(),
//     );

//     if (!user) return false;

//     setLoggedInUser(user);
//     localStorage.setItem("loggedInUser", JSON.stringify(user));
//     return true;
//   }

//   function logout() {
//     setLoggedInUser(null);
//     localStorage.removeItem("loggedInUser");
//   }

//   return (
//     <AuthContext.Provider value={{ loggedInUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { USERS, type ILoggedInUser } from "../service/data/user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loggedInUser, setLoggedInUser] = useState<ILoggedInUser | null>(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  function login(username: string): boolean {
    const user = USERS.find(
      (u) => u.name.toLowerCase() === username.trim().toLowerCase(),
    );

    if (!user) return false;

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return true;
  }

  function logout() {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  }

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
