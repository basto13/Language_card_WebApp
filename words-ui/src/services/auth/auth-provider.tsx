import React, { useEffect } from "react";
import { authProvider } from "./auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface AuthContextType {
  user: any;
  signin: (username: string, password: string, callback?: Function) => void;
  signout: (callback?: Function) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  const updateUser = (jwt: string | null) => {
    if (!jwt) {
      localStorage.removeItem('jwt');
    } else {
      localStorage.setItem('jwt', jwt);
    }
    
    setUser(jwt);
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    setUser(jwt);
  }, [setUser]);

  let signin = (username: string, password: string, callback?: Function) => {
    return authProvider.signin(username, password, (token: string) => {
      updateUser(token);

      if (callback) {
        callback();
      }
    });
  };

  let signout = (callback?: Function) => {
    return authProvider.signout(() => {
      updateUser(null);
      if (callback) {
        callback();
      }
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
