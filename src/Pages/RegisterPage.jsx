import React from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import registerImage from '../assets/Register.png';


export default function RegisterPage() {
  return (
    <div className="font-display bg-background-light dark:bg-gray-100 text-slate-800 dark:text-slate-800 min-h-screen w-full flex flex-col items-center justify-center xl:pb-10">
      <header className=" flex w-full items-center justify-between p-6 sm:px-10">
        <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
          <div className="h-6 w-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight">BookCourier</h2>
        </div>
      </header>

      <main className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-white dark:bg-white shadow-xl lg:grid-cols-2">
        <div className="relative hidden h-full items-center justify-center bg-gray-100 dark:bg-gray-100  lg:flex">
          <img
            className="h-full w-full object-cover"
            alt="A person reaching for a book on a high shelf in a vast library, symbolizing knowledge and access."
            src={registerImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="mb-2 text-4xl font-bold">Welcome to BookCourier</h1>
            <p className="max-w-md text-lg text-white/90">
              Your personal library, delivered. Discover and request books from nearby
              libraries with ease.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12">
          <div className="w-full">
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl font-extrabold tracking-tighter dark:text-slate-800
              sm:text-4xl">
                Create Your Account
              </h1>
              <p className="mt-2 text-subtle-light dark:text-subtle-dark">
                Get books delivered right to your doorstep.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  className="form-input w-full rounded-lg border-border-light bg-background-light p-3 text-text-light placeholder:text-subtle-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-gray-100 dark:text-text-dark dark:focus:border-primary"
                  id="fullName"
                  placeholder="Enter your full name"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="form-input w-full rounded-lg border-border-light bg-background-light p-3 text-text-light placeholder:text-subtle-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-gray-100 dark:text-text-dark dark:focus:border-primary"
                  id="email"
                  placeholder="Enter your email address"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="email">
                 Profile Picture
                </label>
                <input
                  className="form-input w-full rounded-lg border-border-light bg-background-light p-3 text-text-light placeholder:text-subtle-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-gray-100 dark:text-text-dark dark:focus:border-primary"
                  id="email"
                  placeholder="Enter your profile picture url"
                  type="url"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="password">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    className="form-input w-full rounded-lg border-border-light bg-background-light p-3 pr-10 text-text-light placeholder:text-subtle-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-gray-100 dark:text-text-dark dark:focus:border-primary"
                    id="password"
                    placeholder="Create a strong password"
                    type="password"
                  />
                  <button type="button" className="absolute right-3 text-subtle-light dark:text-subtle-dark">
                    {/* <span className="material-symbols-outlined text-xl">visibility_off</span> */}
                   <FaRegEye/>
                  </button>
                </div>

                {/* <div className="mt-2 space-y-1.5">
                  <div className="password-strength-bar flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="bg-error" style={{ width: "25%" }}></div>
                  </div>
                  <p className="text-xs text-error">Weak. Must be at least 8 characters.</p>
                </div>
                */}
              </div> 

              {/* <div className="space-y-2">
                <label className="text-sm font-medium text-text-light dark:text-text-dark">
                  Profile Picture
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-border-light border-dashed rounded-lg cursor-pointer bg-background-light dark:bg-slate-800 hover:bg-gray-100 dark:border-border-dark dark:hover:border-gray-500 dark:hover:bg-slate-700"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <span className="material-symbols-outlined text-4xl text-subtle-light dark:text-subtle-dark">
                        cloud_upload
                      </span>
                      <p className="mb-2 text-sm text-subtle-light dark:text-subtle-dark">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-subtle-light dark:text-subtle-dark">
                        PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div> */}

              <div className="flex items-center space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm text-subtle-light dark:text-subtle-dark">
                  I agree to the <a className="font-medium text-primary hover:underline">Terms of Service</a> and
                  <a className="font-medium text-primary hover:underline"> Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-slate-700 py-3 px-4 text-center font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900 hover:cursor-pointer"
              >
                Create Account
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-subtle-light dark:text-slate-700">
              Already have an account? <a className="font-medium text-primary hover:underline hover:cursor-pointer">Log in</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

