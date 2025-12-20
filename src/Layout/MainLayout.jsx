import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header/>
        <div className="min-h-screen mt-16 bg-slate-100 ">
         <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout
