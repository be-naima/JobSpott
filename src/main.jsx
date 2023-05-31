import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics'
import Blogs from './Components/Blogs/Blogs'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ViewDetails from './Components/ViewDetails/ViewDetails';
import Error from './Components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=>fetch('/FeaturedJobs.json')
  
      },
      {
        path:"appliedJobs",
        element:<AppliedJobs></AppliedJobs>,
        loader: ()=>fetch('/FeaturedJobs.json')
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>
        
      },
      {
        path:"blogs",
        element: <Blogs></Blogs>
        
      },
      {
        path:"FeaturedJobs/:id",
        element: <ViewDetails></ViewDetails>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
