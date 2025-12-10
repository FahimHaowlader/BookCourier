
import { createBrowserRouter,RouterProvider } from 'react-router'
import './App.css'

import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'

function App() {
  const router = createBrowserRouter([
    {
       path: '/',
       element: <HomePage />
    },
    {
      path: '*',
      element: <div>404 Not Found</div>
    },
    {
      path:'/login',
      Component: LoginPage
    },
    {
      path:'/register',
      Component : RegisterPage
    }
]) 

  return <RouterProvider router={router} />;
}

export default App
