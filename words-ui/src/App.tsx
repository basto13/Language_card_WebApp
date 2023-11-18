import React from 'react';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider, RequireAuth } from './services/auth/auth-provider';
import { SignupPage } from './screens/Signup';
import { LoginPage } from './screens/Login';
import { SnackbarProvider } from 'notistack';
import { TestsPage } from './screens/TestsPage';
import { RouteError } from './components/RouteError';
import { CurrentTest } from './screens/CurrentTest';
import { TestResults } from './screens/TestResults';
import { StoreContext, useAppReducer } from './store/store';

const router = createBrowserRouter([
  {
    index: true,
    element: (<Navigate to={`/tests`} />),
    errorElement: <RouteError />,
  },
  {
    path: "/tests",
    element: (<RequireAuth>
      <TestsPage />
    </RequireAuth>),
    errorElement: <RouteError />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: (<SignupPage />)
  },
  {
    path: "/test/:testId",
    element: (<RequireAuth>
      <CurrentTest />
    </RequireAuth>)
  },
  {
    path: "/results",
    element: (<RequireAuth>
      <TestResults />
    </RequireAuth>)
  }
]);


export const App = () => {
  const [state, dispatch] = useAppReducer();

  return (
    <React.StrictMode>
      <SnackbarProvider>
        <StoreContext.Provider value={{state, dispatch}}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </StoreContext.Provider>
      </SnackbarProvider>
    </React.StrictMode>
  )
}
