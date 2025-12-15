import React from "react";
import { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
// import { MdEmail } from "react-icons/md";
// import { IoMdLock } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Login from "../assets/Login.png";


function LoginPage() {
     const [showPass, setshowPass] = useState(true);
   const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state || "/";
    console.log(location?.state);
    const { emailUserSignIn, googleUser, setLoading } = useAuth();

    const handleEmailLogin = (e) => {
      e.preventDefault();
      // console.log(from)
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      emailUserSignIn(email, password)
        .then((user) => {
          setLoading(false);
          // console.log(from)
          toast.success("Login Successful");
          navigate(from);

        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
          console.log(error);
          // alert(error.message);
        });
    };

      const handleGooglelogin = () => {
      googleUser()
        .then((user) => {
          setLoading(false);
          toast.success("Google Login Successful");
          navigate(from);
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
        });
    };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-100 dark:bg-gray-100  group/design-root overflow-hidden ">
        <header className=" flex w-full items-center justify-between p-6 sm:px-10">
         <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
                    <div className="flex items-center justify-center gap-1 lg:gap-2 px-0 lg:pl-20">
                      <div className="text-primary size-7 text-slate-700">
                        <svg
                          fill="none"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>      
                      <h2 className="text-xl font-bold tracking-tight text-slate-700">
                        BookCourier
                      </h2>
                    </div>
                  </div>
      </header>

      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1">
          <div className="flex w-full flex-col lg:flex-row">

            {/* Left Side Banner */}
            <div className="relative hidden w-full flex-col items-center justify-center bg-slate-100 dark:bg-slate-100 lg:flex lg:w-1/2">
              <div className="w-full max-w-lg p-8">
                <div
                  className="aspect-square w-full rounded-xl bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      `url(${Login})`,
                  }}
                ></div>

                <div className="mt-8 text-center">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900">
                    Your library, delivered.
                  </h2>
                  <p className="mt-2 text-slate-700 dark:text-slate-700">
                    Request pickups or deliveries from nearby libraries with ease.
                  </p>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
              <div className="w-full max-w-md space-y-4">
            <form onSubmit={handleEmailLogin}>

                {/* Branding */}
                {/* <div className="text-center lg:text-left">
                  <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                      <span className="material-symbols-outlined text-3xl text-white">
                        local_library
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                      BookCourier
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 lg:justify-between">
                    <div className="flex min-w-72 flex-col gap-1">
                      <p className="text-slate-800 dark:text-slate-200 text-3xl font-black leading-tight tracking-[-0.033em]">
                        Welcome Back
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-base font-normal">
                        Log In to BookCourier
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Inputs */}
                <div className="flex flex-col gap-4">

                  {/* Email */}
                  <label className="flex flex-col">
                    <p className="text-slate-900 dark:text-slate-900 text-base font-medium pb-2">
                      Email Address
                    </p>
                    <div className="flex w-full items-stretch rounded-lg"> 
                      <input
                      name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="form-input flex w-full flex-1 rounded-lg text-black dark:text-black  bg-white dark:bg-white h-14 p-3.5 placeholder:text-slate-400 dark:placeholder:text-slate-500 "
                      />
                    </div>
                  </label>

                  {/* Password */}
                  <label className="flex flex-col">
                    <p className="text-slate-900 dark:text-slate-900 text-base font-medium pb-2">
                      Password
                    </p>
                    <div className="flex w-full items-stretch rounded-lg relative">                    
                      <input
                      name="password"
                        type={!showPass ? "text" : "password"}
                        placeholder="Enter your password"
                        className="form-input flex w-full flex-1 rounded-lg text-slate-800 dark:text-slate-800 border border-slate-100 bg-white dark:bg-white h-14 p-3.5 pr-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 "
                      />
                       <button type="button" onClick={() => setshowPass(!showPass)}>
                        {!showPass ? (
                          <FaRegEyeSlash className="absolute right-5 top-4.5 sm:right-10   cursor-pointer text-gray-400" />
                        ) : (
                          <FaRegEye className="absolute right-5 top-4.5 sm:right-10  cursor-pointer text-gray-400" />
                        )}
                      </button>
                    </div>
                  </label>

                  <Link className="text-slate-600 text-sm font-medium underline text-right hover:text-slate-800 hover:cursor-pointer">
                    Forgot Password?
                  </Link>
                </div>
             

                {/* Actions */}
                {/* <div className="flex flex-col gap-4"> */}
                  <input type="submit" className="flex h-14 w-full mt-6 items-center justify-center gap-2 rounded-lg bg-slate-700 px-6 text-base font-bold text-white shadow-sm hover:bg-slate-800 hover:cursor-pointer hover:shadow-md" value="Log In" />
                   </form>

                  <div className="flex items-center gap-4">
                    <hr className="w-full border-slate-300 dark:border-slate-700" />
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      OR
                    </p>
                    <hr className="w-full border-slate-300 dark:border-slate-700" />
                  </div>
                
                  <button onClick={handleGooglelogin} className="flex h-14 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-700 dark:bg-slate-700 px-6 text-base font-bold text-slate-800 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:cursor-pointer hover:shadow-md">
                    <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5777 12.2592C22.5777 11.4593 22.5152 10.6865 22.3831 9.94055H12.2471V14.2882H18.1736C17.9231 15.8236 17.113 17.1162 15.8423 17.9734V20.7222H19.5546C21.4988 18.9482 22.5777 15.903 22.5777 12.2592Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12.2471 23.0001C15.4744 23.0001 18.2059 21.932 20.149 20.013L16.4367 17.2642C15.3676 17.9735 13.9486 18.3976 12.2471 18.3976C9.17294 18.3976 6.55171 16.3835 5.61333 13.6618H1.78271V16.4913C3.70233 20.2524 7.64136 23.0001 12.2471 23.0001Z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.6133 13.6618C5.38911 12.9806 5.25928 12.2592 5.25928 11.5C5.25928 10.741 5.38911 10.0194 5.6133 9.33823V6.50879H1.78271C0.947266 8.20964 0.5 10.063 0.5 11.5C0.5 12.9371 0.947266 14.7904 1.78271 16.4913L5.6133 13.6618Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12.2471 4.60254C13.974 4.60254 15.2977 5.24886 15.8858 5.81422L18.7915 3.03845C16.9298 1.33759 14.8055 0 12.2471 0C7.64136 0 3.70233 2.74768 1.78271 6.50878L5.61333 9.33822C6.55171 6.61655 9.17294 4.60254 12.2471 4.60254Z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                    <span> Continue with Google </span> 
                  </button>
                {/* </div> */}

                <p className="text-center text-sm font-medium text-slate-800 dark:text-slate-800">
                  Don't have an account?{" "}
                  <Link to="/register" className="font-bold text-primary hover:underline hover:text-primary/80 hover:cursor-pointer">
                    Register
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
