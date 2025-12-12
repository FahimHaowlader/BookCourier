import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

const UserLayout = () => {
   const NavberLinks = [
    { to: "/profile", label: "Home" },
    { to: "/invoice", label: "Blogs" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
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
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3FTXFzqZrIY0ctXZ-3qQz69ozrf52P9msyxo0OVjd-pSkcJtJ5Lh4DbsPQbjn_F63QXRWus49B1lTpjUID61NMQd-YyVmr0lUx_OE312D3xO3-l18DZoPiZfsiwDsmiu3dNKiBH-hp5uIs6KV3Lm30x0FYSxbUEspfA3IQFoA6d5N0BEgkGe26fV8bLuPdl-ohgM8_Wo4DIVubDreJC_oAORmCR2q-gtdCFCRpmHGKgrK8dqxERVwHxs_3GFfVDxNyg0TnFbFZM4')",
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-[#0d141b]  dark:text-[#0d141b] text-base font-semibold leading-normal">
                Alexandre V.
              </h1>
              <p className="text-[#4c739a] dark:text-slate-500 text-[15px] font-normal leading-normal">
                alex.v@email.com
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
                    Dashboard</span>
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
        className="flex min-w-[84px] justify-center items-center rounded-lg h-10 px-4 bg-slate-900 dark:bg-slate-900 text-slate-100 dark:text-slate-100 
                    hover:text-slate-700 dark:hover:text-slate-700 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-300 transition-colors hover:cursor-pointer"
                  >
          <span className="truncate">Request a book</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
