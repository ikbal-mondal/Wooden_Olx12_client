
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashboardLayout from './DashboardLayout.js/DashboardLayout';
import Main from './Layout/Main';
import Blogs from './Pages/Blogs/Blogs';
import CategoryProduct from './Pages/CategoryProduct/CategoryProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MayOrder from './Pages/Dashboard/MayOrder/MayOrder';
import Error404Page from './Pages/Error404Page/Error404Page';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Signup from './Pages/Home/Signup/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
 
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>, 
      children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/home',
            element:<Home></Home>
           },
           
           {
            path:'/Categories/:id',
            element:<PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/Categories/${params.id}`)
           },
           
           {
            path:'/blogs',
            element:<Blogs></Blogs>
           },
           {
            path:'/signup',
            element:<Signup></Signup>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/*',
            element:<Error404Page></Error404Page>
           }
      ]
    },

 {
  path:'/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element: <MayOrder></MayOrder>
      },
    ]
 }






  ])

  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
