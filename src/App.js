
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashboardLayout from './DashboardLayout.js/DashboardLayout';
import Main from './Layout/Main';
import CategoryProduct from './Pages/CategoryProduct/CategoryProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import Error404Page from './Pages/Error404Page/Error404Page';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Signup from './Pages/Home/Signup/Signup';

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
            element:<CategoryProduct></CategoryProduct>,
            loader:({params}) => fetch(`http://localhost:5000/Categories/${params.id}`)
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
    element: <DashboardLayout></DashboardLayout>,
   
    children:[
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
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
