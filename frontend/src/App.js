import React from 'react';
import "./index.css"
// react router dom
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Login_org from './Pages/Login_org';
import Register from './Pages/Register';
import AboutUs from './Pages/AboutUs';
import FAQ from './Pages/FAQ';
import CreateEvent from './Pages/CreateEvent';
import UserProfileSettings from './Pages/UserProfileConfig';
import OrgProfileSettings from './Pages/OrgProfileConfig';
import UserProfile from './Pages/UserProfile';
import Single from './Pages/Single';
import ContactUs from './Pages/ContactUs';
import OrgProfile from './Pages/OrgProfile';
import Register_org from './Pages/Register_org';
import RequireAuth from './Components/RequireAuth'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const browserRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/register',
    element:<Register />
  },
  {
    path:'/aboutus',
    element:<AboutUs />
  },
  {
    path:'/faq',
    element:<FAQ />
  },
  {
    path:'/create_event',
    element:(<RequireAuth> <CreateEvent />  </RequireAuth>)
  },
  {
    path:'/user_profile_settings/:id',
    element:<UserProfileSettings />
  },
  {
    path:'/user_profile/:id',
    element:<UserProfile />
  },
  {
    path:'/post/:id',
    element: <Single />
  },
  {
    path:'/contactus',
    element:<ContactUs />
  },
  {
    path:'/org_profile_settings/:id',
    element:<OrgProfileSettings />
  },
  {
    path:'/org_profile/:id',
    element: <OrgProfile />
  },
  {
    path:'/register_org',
    element:<Register_org/>
  },
  {
    path:'/login_org',
    element:<Login_org/>
  },
  ]);

function App() {
  
  
  const queryClient = new QueryClient();
  return (
    <div id='App'>
      <QueryClientProvider client={queryClient}>
            <RouterProvider router={browserRouter}/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
