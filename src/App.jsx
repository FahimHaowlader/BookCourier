import { Navigate } from 'react-router'
import { createBrowserRouter,RouterProvider } from 'react-router'
import './App.css'

// Importing Pages
import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import ReviewsPage from './Pages/ReviewsPage.jsx'
import BlogsPage from './Pages/BlogsPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import InvoicePage from './Pages/InvoicePAge.jsx'
import MyOrderPage from './Pages/MyOrder.jsx'
import AddBookPage from './Pages/AddBookPage.jsx'
import MyBooksPage from './Pages/MyBookPage.jsx'


// Importing Layouts
import MainLayout from './Layout/MainLayout.jsx'
import UserLayout from './Layout/UserLayout.jsx'
import LibrarianLayout from './Layout/LibrarianLayout.jsx'


function App() {
  const router = createBrowserRouter([
    {
       path: '/',
       element: <Navigate to="/home" replace />
    },
    {
      path:'/',
      element: <MainLayout/>,
      children: [
           {
            path: '/home',
            Component: HomePage
           },
           {
             path:'/reviews',
             Component: ReviewsPage
           },
           {
            path:'/blogs',
            Component: BlogsPage  
          },
          {
          path:'/contact',
          Component: ContactPage
          },
          {
          path:'/about',
          Component: AboutPage
          },
          {
          path:'/reviews',
          Component: ReviewsPage
          }
    ]},
    {
      path:'/',
      Component:UserLayout,
      children:[
        {
          path:'profile',
          Component:ProfilePage
        },
        {
          path : 'invoice',
          Component : InvoicePage
        },
        {
          path : 'my-orders',
          Component : MyOrderPage
        }
      ]
    },
    {
      path:'/',
      Component:LibrarianLayout,
      children:[
        {
          path:'add-book',
          Component:AddBookPage
        },
        {
          path : 'invoice',
          Component : InvoicePage
        },
        {
          path : 'my-books',
          Component : MyBooksPage
        }
      ]
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
    },
    {
      path:'/logout',
      element: <Navigate to="/home" replace />
    },
    // {
    //   path:'/profile',
    //   Component:ProfilePage
    // }
    
]) 
  
  return <RouterProvider router={router} />;
}

export default App
