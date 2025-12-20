import React from 'react'
import { NavLink,Outlet } from 'react-router';
   import { GoHome } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineStore } from "react-icons/md";
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';

const AdminLayout = () => {
  const {user} = useAuth();
   const NavberLinks = [
    { to: "/profile", label: "Profile", icon: <GoHome size={18} /> },
    { to: "/all-users", label: "Users", icon: <PiUsersThree size={18} /> },
    { to: "/all-books", label: "All Books", icon: <MdOutlineStore size={18} /> },
      
  ];

  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-50 font-display text-slate-800 dark:text-slate-400">
      {/* Sidebar */}
      <aside className="flex h-auto w-64 flex-col justify-between border-r border-slate-300 dark:border-slate-300 bg-white dark:bg-white p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 p-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  `url(${user?.photoURL})`,
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-[#0d141b]  dark:text-[#0d141b] text-base font-semibold leading-normal">
                {user?.displayName || "Alexandre V."}
              </h1>
              <p className="text-[#4c739a] dark:text-slate-500 text-[10px] font-normal leading-normal">
                {user?.email || "xyz@gmail.com"}
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 mt-4">
             {NavberLinks.map((item) => (
               <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors " ${
                      isActive
                        ? "text-white dark:text-white font-bold hover:text-white dark:hover:text-white  hover:bg-slate-900 text-sm dark:hover:bg-slate-900 hover:cursor-pointer  dark:font-bold bg-slate-900"
                        : "text-[#0d141b] dark:text-[#0d141b] "
                    } hover:text-slate-700 dark:hover:text-slate-700 font-bold hover:bg-slate-300 dark:hover:bg-slate-300 text-sm hover:cursor-pointer   `
                  }
                >
                  <span className="material-symbols-outlined">
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              
              ))}
            {/* <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d141b] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d141b] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">list_alt</span>
              <p className="text-sm font-medium leading-normal">My Requests</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d141b] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">local_library</span>
              <p className="text-sm font-medium leading-normal">Libraries</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary dark:text-white dark:bg-primary"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person
              </span>
              <p className="text-sm font-medium leading-normal">My Profile</p>
            </a> */}
          </nav>
        </div>

        <button 
         className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-900 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
          <span className="truncate">Request a book</span>
        </button>
      </aside>
      {/* className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-800 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2"> */}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};


export default AdminLayout
