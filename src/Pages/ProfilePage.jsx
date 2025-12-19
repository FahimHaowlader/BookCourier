import React from "react";
import { useAuth } from "../Context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();
  return (
  
      <div className="mx-auto max-w-5xl py-4">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 pb-8">
          <h1 className="text-[#0d141b] dark:text-[#0d141b] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            My Profile
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Header */}
          <div className="lg:col-span-1">
            <div className="flex flex-col p-4 bg-white rounded-xl border border-slate-200 dark:border-slate-200">
              <div className="flex w-full flex-col gap-4 items-center text-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32"
                  style={{
                    backgroundImage:
                      `url(${user?.photoURL || 'https://i.ibb.co/7CQVJNm/placeholder.png'})`,
                  }}
                ></div>

                <div className="flex flex-col justify-center">
                  <p className="text-[#0d141b] dark:text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em]">
                    {user?.displayName || "Alexandre V."}
                  </p>
                  <p className="text-[#4c739a] dark:text-[#4c739a] text-base font-normal leading-normal">
                    {user?.email || "alex.v@email.com"}
                  </p>
                  {/* <p className="text-[#4c739a] dark:text-[#4c739a] text-base font-normal leading-normal mt-1">
                    Member since Jan 2023
                  </p> */}
                </div>

                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-[#0d141b] dark:text-slate-200 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Upload new photo
                </button>
              </div>
            </div>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-2">
            <div className="bg-white  rounded-xl border border-slate-200 dark:border-slate-200">
              <h2 className="text-[#0d141b] dark:text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-6 border-b border-slate-200 dark:border-slate-200">
                Edit your information
              </h2>

              <form className="p-6 space-y-6">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-[#0d141b] dark:text-[#0d141b] text-base font-medium pb-2" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    className="form-input w-full rounded-lg text-slate-700  dark:text-slate-700  border border-slate-300 dark:border-slate-300 bg-background-light dark:bg-background-dark h-12 p-3 "
                    placeholder="Enter your full name"
                    value={user?.displayName || "Alexandre V."}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[#0d141b] dark:text-[#0d141b] text-base font-medium pb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    readOnly
                    className="form-input w-full rounded-lg text-slate-800 dark:text-slate-800 border border-slate-300 dark:border-slate-300 bg-slate-200 dark:bg-slate-200 h-12 p-3 cursor-not-allowed"
                    value={user?.email || "xyz@gmai.com"}
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                  <button
                    type="button"
                    className="flex min-w-[84px] justify-center items-center rounded-lg h-10 px-4 bg-slate-900 dark:bg-slate-900 text-slate-100 dark:text-slate-100 
                    hover:text-slate-700 dark:hover:text-slate-700 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-300 transition-colors hover:cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled
                    className="flex min-w-[84px] justify-center items-center rounded-lg h-10 px-4 bg-slate-900 dark:bg-slate-900 text-slate-100 dark:text-slate-100 
                    hover:text-slate-700 dark:hover:text-slate-700 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-300 transition-colors hover:cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
