import React from 'react';
import "./index.css"
// react router dom
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AboutUs from './Pages/AboutUs';
import FAQ from './Pages/FAQ';
import CreateEvent from './Pages/CreateEvent';
import UserProfileSettings from './Pages/UserProfileConfig';
import UserProfile from './Pages/UserProfile';
import Booking from './Pages/Booking';
import ContactUs from './Pages/ContactUs';
import OrgProfile from './Pages/OrgProfile';

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
    element:<CreateEvent />
  },
  {
    path:'/my_events',
    element:<UserProfileSettings />
  },
  {
    path:'/my_profile',
    element:<UserProfile />
  },
  {
    path:'/user_profile',
    element:<UserProfile />
  },
  {
    path:'/booking',
    element:<Booking />
  },
  {
    path:'/contactus',
    element:<ContactUs />
  },
  {
    path:'/org_profile',
    element:<OrgProfile />
  }
  ]);

function App() {
  return (
    <div id='App'>
      <RouterProvider router={browserRouter}/>
    </div>
  );
}

export default App;
