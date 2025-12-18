import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import registerImage from "../assets/Register.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function RegisterPage() {
  const [showPass, setshowPass] = useState(true);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const { setLoading, createEmailUser, userInfoUpdate, googleUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const url = form.url.value;
    const email = form.email.value;
    // const terms = form.terms.value;
    const password = form.password.value;

    console.log(name, url, email, password);
    const userInfo = {
      displayName: name,
      photoURL: url,
    };
    if (!checked) {
      toast.error("You must agree to the Terms of Service and Privacy Policy");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password must contain a lowercase letter");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must contain an uppercase letter");
      return;
    }
    createEmailUser(email, password).then((user) => {
      console.log(user);
      userInfoUpdate(userInfo)
        .then(() => {
          axios
            .post("https://bookcourier-server.vercel.app/users", {
              name: name,
              email: email,
              photoURL: url,
              role: "member",
            })
            .then((response) => {
              console.log("User data saved:", response.data);
              axios
                .post("/jwt", {
                  email: email,
                  role: "member",
                })
                .then(() => {
                  setLoading(false);
                  toast.success("Profile Updated Successfully");
                  navigate("/");
                })
                .catch((error) => {
                  console.error("Error saving user info:", error);
                  toast.error("Failed to save user info");
                })
                .catch((error) => {
                  console.error("Error saving user data:", error);
                });
            })
            .catch((e) => {
              toast.error("Failed to Update Profile");
              console.log(e);
            });
        })
        .catch((e) => {
          setLoading(false);
          toast.error(e.message);
          //
          // alert(e.message);
        });
    });

    const handleGoogleSignup = () => {
      googleUser()
        .then((user) => {
          console.log("Google User:", user);
          axios
            .get("https://bookcourier-server.vercel.app/users", {
              params: { email: user.email },
            })
            .then((dbuser) => {
              if (dbuser) {
                axios
                  .post("https://bookcourier-server.vercel.app/jwt", {
                    email: dbuser.email,
                    role: dbuser.role || "member",
                  })
                  .then((response) => {
                    console.log("JWT Token:", response.data);
                    localStorage.setItem("access-token", response.data);
                    toast.success("Google Sign Up Successful");
                    setLoading(false);
                    navigate("/");
                  })
                  .catch((error) => {
                    console.error("Error fetching JWT token:", error);
                    setLoading(false);
                  });
                return;
              } else {
                axios
                  .post("https://bookcourier-server.vercel.app/users", {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    role: "member",
                  })
                  .then((response) => {
                    console.log("User data saved:", response.data);
                    axios
                      .post("https://bookcourier-server.vercel.app/jwt", {
                        email: user.email,
                        role: "member",
                      })
                      .then((response) => {
                        console.log("JWT Token:", response.data);
                        localStorage.setItem("access-token", response.data);
                        setLoading(false);
                        navigate("/");
                        toast.success("Google Sign Up Successful");
                      })
                      .catch((error) => {
                        console.error("Error fetching JWT token:", error);
                        setLoading(false);
                      })
                      .catch((error) => {
                        console.error("Error saving user data:", error);
                      });
                  });
                // toast.error("User already exists");
                setLoading(false);
                // navigate("/");
                return;
              }
            })
            .catch((error) => {
              console.error("Error checking user existence:", error);
            });
        })
        .catch((error) => {
          console.error("Google Sign Up Error:", error);
          setLoading(false);
          // toast.error("Google Sign Up Failed");
        });
    };

    return (
      <div className="font-display bg-background-light dark:bg-gray-100 text-slate-800 dark:text-slate-800 min-h-screen w-full flex flex-col items-center justify-center xl:pb-10">
        <header className=" flex w-full items-center justify-between p-6 sm:px-10">
          <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <div className="flex items-center justify-center gap-1 lg:gap-2">
              <div className=" text-primary size-7 text-slate-700">
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

        <main className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-white dark:bg-white shadow-xl lg:grid-cols-2">
          <div className="relative hidden h-full items-center justify-center bg-gray-100 dark:bg-gray-100  lg:flex">
            <img
              className="h-full w-full object-cover"
              alt="A person reaching for a book on a high shelf in a vast library, symbolizing knowledge and access."
              src={registerImage}
            />
            <div className="absolute inset-0 "></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h1 className="mb-2 text-4xl font-bold">
                Welcome to BookCourier
              </h1>
              <p className="max-w-md text-lg text-white/90">
                Your personal library, delivered. Discover and request books
                from nearby libraries with ease.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="w-full">
              <div className="mb-8 text-center lg:text-left">
                <h1
                  className="text-3xl font-extrabold tracking-tighter dark:text-slate-800
              sm:text-4xl"
                >
                  Create Your Account
                </h1>
                <p className="mt-2 text-subtle-light dark:text-subtle-dark">
                  Get books delivered right to your doorstep.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-text-light dark:text-text-dark"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="form-input w-full rounded-lg border-border-light bg-background-light p-3 text-text-light placeholder:text-subtle-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-gray-100 dark:text-text-dark dark:focus:border-primary"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    type="text"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-text-light dark:text-text-dark"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="form-input w-full rounded-lg border-border-light bg-background-light p-3 text-text-light placeholder:text-subtle-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-gray-100 dark:text-text-dark dark:focus:border-primary"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-text-light dark:text-text-dark"
                    htmlFor="url"
                  >
                    Profile Picture
                  </label>
                  <input
                    className="form-input w-full rounded-lg border-border-light bg-background-light p-3 text-text-light placeholder:text-subtle-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-gray-100 dark:text-text-dark dark:focus:border-primary"
                    id="url"
                    name="url"
                    placeholder="Enter your profile picture url"
                    type="url"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-text-light dark:text-text-dark"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      className="form-input w-full rounded-lg border-border-light bg-background-light p-3 pr-10 text-text-light placeholder:text-subtle-light focus:border-primary focus:ring-primary dark:border-border-dark dark:bg-gray-100 dark:text-text-dark dark:focus:border-primary"
                      id="password"
                      name="password"
                      placeholder="Create a strong password"
                      type={!showPass ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setshowPass(!showPass)}
                    >
                      {!showPass ? (
                        <FaRegEyeSlash className="absolute right-5 top-4.5 sm:right-10   cursor-pointer text-gray-400" />
                      ) : (
                        <FaRegEye className="absolute right-5 top-4.5 sm:right-10  cursor-pointer text-gray-400" />
                      )}
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
                    name="terms"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-subtle-light dark:text-subtle-dark"
                  >
                    I agree to the{" "}
                    <a className="font-medium text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and
                    <a className="font-medium text-primary hover:underline">
                      {" "}
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {/* <div className="flex flex-col gap-4"> */}
                <input
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-slate-700 px-6 text-base font-bold text-white shadow-sm hover:bg-slate-800 hover:cursor-pointer hover:shadow-md"
                  value="Sign Up"
                  type="submit"
                />
              </form>
              <div className="flex mt-2 items-center gap-4">
                <hr className="w-full border-slate-300 dark:border-slate-700" />
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  OR
                </p>
                <hr className="w-full border-slate-300 dark:border-slate-700" />
              </div>

              <button
                onClick={handleGoogleSignup}
                className="flex h-14 mt-2 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-700 dark:bg-slate-700 px-6 text-base font-bold text-slate-800 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:cursor-pointer hover:shadow-md"
              >
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

              <Link
                to="login"
                className="mt-8 text-center text-sm text-subtle-light dark:text-slate-700"
              >
                Already have an account?{" "}
                <a className="text-primary underline font-bold hover:cursor-pointer">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  };
}
