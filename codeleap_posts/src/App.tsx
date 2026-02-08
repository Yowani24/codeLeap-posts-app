import Feed from "./components/Feed";
import { Signup } from "./components/Signup";
import { useAuth } from "./context/useAuth";
import { useState } from "react";

function App() {
  const { loggedInUser, login, logout } = useAuth();
  const [error, setError] = useState("");

  if (!loggedInUser) {
    return (
      <>
        <Signup
          onSubmit={(username) => {
            const success = login(username);
            if (!success) {
              setError("User not allowed");
            }
          }}
        />
        {error && (
          <p className="fixed bottom-10 w-full text-center text-red-500">
            {error}
          </p>
        )}
      </>
    );
  }

  return (
    <div className="">
      <Feed logoutFn={logout} username={loggedInUser.name} />
    </div>
  );
}

export default App;
