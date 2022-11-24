
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
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
            path:'/signup',
            element:<Signup></Signup>
           },
           {
            path:'/login',
            element:<Login></Login>
           }
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
