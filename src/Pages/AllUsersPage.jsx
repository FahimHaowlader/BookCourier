import { useState, useMemo,useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import {toast} from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const USERS_PER_PAGE = 5;

const initialUsers = [
  { id: 1024, name: "Alice Johnson", email: "alice.j@email.com", role: "Admin" },
  { id: 1023, name: "Bob Williams", email: "bob.w@email.com", role: "Librarian" },
  { id: 1022, name: "Charlie Brown", email: "charlie.b@email.com", role: "Member" },
  { id: 1021, name: "Diana Prince", email: "diana.p@email.com", role: "Member" },
  { id: 1020, name: "Eve Adams", email: "eve.a@email.com", role: "Member" },
  { id: 1019, name: "Frank Miller", email: "frank.m@email.com", role: "Member" },
];

export default function AllUsersPage() {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Reset to first page when filters change
    const downloadUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all-users')
        console.log("Fetched users:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    downloadUsers();
        
  }, []);

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredUsers = useMemo(() => {
    return users?.filter((u) => {
      const matchSearch =
        u.name?.toLowerCase().includes(search.toLowerCase()) ||
        u.email?.toLowerCase().includes(search.toLowerCase()) ||
        String(u._id).includes(search);

      const matchRole =
        roleFilter === "All" ? true : u.role === roleFilter;

      return matchSearch && matchRole;
    });
  }, [users, search, roleFilter]);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredUsers?.length / USERS_PER_PAGE);
  const paginatedUsers = filteredUsers?.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  /* ---------------- ACTION HANDLERS ---------------- */
  const makeAdmin = async (id) => {
    await axios.patch(`http://localhost:3000/users/${id}`, { role: "admin" })
    .then(response => {
      console.log("User role updated:", response.data);
      toast.success("User promoted to Admin");
    })
    .catch(error => {
      console.error("Error updating user role:", error);
      toast.error("Failed to promote user to Admin");
    });
    setUsers((prev) =>
      prev.map((u) => (u._id === id ? { ...u, role: "admin" } : u))
    );
  };

  const makeLibrarian = async (id) => {
    await axios.patch(`http://localhost:3000/users/${id}`, { role: "librarian" })
    .then(response => {
      console.log("User role updated:", response.data);
      toast.success("User promoted to Librarian");
    })
    .catch(error => {
      console.error("Error updating user role:", error);
      toast.error("Failed to promote user to Librarian");
    });
    setUsers((prev) =>
      prev.map((u) => (u._id === id ? { ...u, role: "librarian" } : u))
    );
  };

   const makeMember = async (id) => {
    await axios.patch(`http://localhost:3000/users/${id}`, { role: "member" })
    .then(response => {
      console.log("User role updated:", response.data);
      toast.success("User demoted to Member");
    })
    .catch(error => {
      console.error("Error updating user role:", error);
      toast.error("Failed to demote user to Member");
    });
    setUsers((prev) =>
      prev.map((u) => (u._id === id ? { ...u, role: "member" } : u))
    );
  };


  return (
    <div className="p-8 w-full max-w-7xl mx-auto flex flex-col gap-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-900">
            All Users
          </h1>
          <p className="text-slate-500 dark:text-slate-500">
            Manage all registered users in the system.
          </p>
        </div>
      </div>

      {/* ================= SEARCH & FILTERS ================= */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <input
          className="w-full md:flex-1 px-4 text-slate-700 py-1.5 border border-slate-200 bg-white rounded-lg"
          placeholder="Search by name, email, or user ID..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        {/* Role Buttons */}
        <div className="flex gap-2">
          {["All", "member", "librarian"].map((role) => (
            <button
              key={role}
              onClick={() => {
                setRoleFilter(role);
                setPage(1);
              }}
              className={`h-9 px-4 rounded-lg  text-sm font-medium hover:cursor-pointer hover:text-slate-800 hover:bg-slate-300
                ${
                  roleFilter === role
                    ? "bg-slate-200 text-slate-800"
                    : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-white"
                }`}
            >
              {role === "All" ? "All Roles" : role.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-100 dark:bg-slate-800 text-white">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold">User ID</th>
              <th className="px-4 py-3 text-sm font-semibold">Full Name</th>
              <th className="px-4 py-3 text-sm font-semibold">Email</th>
              <th className="text-center px-4 py-3 text-sm font-semibold">Role</th>
              <th className="text-center px-4 py-3 text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers?.map((user) => (
              <tr
                key={user._id}
                className="border-b bg-white border-slate-200 dark:border-slate-200 hover:bg-slate-100 hover:cursor-pointer"
              >
                <td className="px-4 py-3 text-sm text-slate-700">
                  {user._id}
                </td>

                <td className="px-4 py-3 text-sm text-slate-900 font-medium">
                  {user.name}
                </td>

                <td className="px-4 py-3 text-sm text-slate-500">
                  {user.email}
                </td>

                <td className="text-center px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        user.role === "admin"
                          ? "bg-red-100 text-red-700"
                          : user.role === "librarian"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="px-4 py-3 text-right text-slate-900 font-medium hover:cursor-pointer">
                  <div className="flex justify-end gap-2">
                    {user.role == "librarian" && (<>
                           <button
                        onClick={() => makeMember(user._id)}
                        className="px-3 py-1 text-xs border border-slate-400 rounded-md hover:bg-slate-600 hover:text-white hover:cursor-pointer active:bg-slate-500"
                      >
                        Make Member
                      </button>
                      <button
                        onClick={() => makeAdmin(user._id)}
                        className="px-3 py-1 text-xs border border-slate-400 rounded-md hover:bg-slate-600 hover:text-white hover:cursor-pointer active:bg-slate-500"
                      >
                        Make Admin
                      </button>
                     
                           </>
                    )}

                    {user.role == "member" && (<>
                   
                      <button
                        onClick={() => makeLibrarian(user._id)}
                        className="px-3 py-1 text-xs border border-slate-400 rounded-md hover:bg-slate-600 hover:text-white hover:cursor-pointer active:bg-slate-500"
                      >
                        Make Librarian
                      </button>
                        <button
                        onClick={() => makeAdmin(user._id)}
                        className="px-3 py-1 text-xs border border-slate-400 rounded-md hover:bg-slate-600 hover:text-white hover:cursor-pointer active:bg-slate-500"
                      >
                        Make Admin
                      </button>
                       </>
                    )}
                  </div>
                </td>
              </tr>
            ))}

            {paginatedUsers?.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-slate-500 bg-white dark:bg-white"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          Showing {(page - 1) * USERS_PER_PAGE + 1} to{" "}
          {Math.min(page * USERS_PER_PAGE, filteredUsers?.length)} results
          {/* of{" "}
          {filteredUsers.length} results */}
        </p>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 border rounded-xl cursor-pointer disabled:opacity-50"
          >
          <IoIosArrowBack size={20} />
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded-xl cursor-pointer disabled:opacity-50"
          >
          <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}


