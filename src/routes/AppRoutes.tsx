import Login from '@/pages/Auth/Login';
import RoleSelection from '@/pages/Auth/roleSelection';
import SignUp from '@/pages/Auth/signUp';
import VerifyOtp from '@/pages/Auth/verifyOtp';
import Layout from '@/pages/Dashboard/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoleSelection/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
  {
    path: "/sign-in",
    element: <Login/>
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp/>
  },
  {
    path: "/layout",
    element: <Layout/>,
    children:[
      {

      }
    ]
  },
  
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};