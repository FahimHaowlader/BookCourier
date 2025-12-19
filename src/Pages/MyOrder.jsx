import React ,{useState,useEffect} from "react";
import { TbSearch } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineSwapVert } from "react-icons/md";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";



export default function MyOrderPage() {
  const { user } = useAuth();
  // console.log("User in InvoicePage:", user?.email);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
  const fetchOrders = async () => {
    try {
      // console.log("Fetching orders for user:", user?.email);
      const response = await axios.get(
        `http://localhost:3000/orders?email=${user?.email}`
      );
      // console.log("Orders fetched:", response.data);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };


    fetchOrders();
    

}, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Page Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <p className="text-[#101922] dark:text-[#101922] text-4xl font-black tracking-tighter">
          My Orders
        </p>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-800 hover:bg-slate-300 hover:text-slate-700 text-white active:text-slate-800 active:bg-slate-200  text-sm font-bold leading-normal tracking-[0.015em] gap-2">
          <FaPlus />
          New Order
        </button>
      </div>

      {/* Search + Filters */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative text-black dark:text-black">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-black dark:text-black text-base font-semibold">
              <TbSearch />
            </span>
            <input
              type="text"
              placeholder="Search orders..."
              className="h-10 w-full rounded-lg border border-slate-200 dark:border-slate-200 bg-white dark:bg-white pl-10 pr-4 text-sm "
            />
          </div>
            <div className="flex gap-x-3 items-center">
          <button 
           className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-800 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-semibold active:text-slate-800 active:bg-slate-200 leading-normal tracking-[0.015em] gap-x-2">
            {/* <span
              className="material-symbols-outlined "
              style={{ fontSize: 10 }}
            >
              expand_more
            </span> */}
            <p className=" font-semibold ">
              Search
            </p>
            
          </button>
        </div>
        </div>
        <div className="flex gap-4 ">
            <div className="relative">
            <select className="h-10 appearance-none rounded-lg font-medium text-white border border-slate-200 dark:border-slate-200 bg-white hover:cursor-pointer dark:bg-slate-800 pl-4 pr-10 text-sm">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>In Transit</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            {/* <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              expand_more
            </span> */}
          </div>
          <div className="relative">
            <button 
             className="flex h-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-800 hover:bg-slate-300 hover:text-slate-700 active:text-slate-800 active:bg-slate-200  text-white text-sm font-semibold leading-normal tracking-[0.015em] gap-x-2">
              <span className="material-symbols-outlined text-base">
                <MdOutlineSwapVert/>
              </span>
              <span>Sort by Date</span>
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      {orders &&
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-200 bg-white dark:bg-background-dark shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-800 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Book Title & Author
                </th>
                <th className="px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Order Date
                </th>
                <th className="px-6 py-4 text-center font-semibold text-white tracking-wider">
                  Order Status
                </th>
                <th className="text-center px-6 py-4 font-semibold text-white tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-4 font-semibold text-white tracking-wider text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 dark:divide-slate-200">
              {/* In Transit + Paid */}
              {
                orders.map(order => (
                  <tr key={order._id} className="hover:bg-slate-100 hover:cursor-pointer dark:hover:bg-slate-100 transition-colors">
                 <td className="px-6 py-4 whitespace-nowrap font-medium">
                  <div className="font-medium text-[#101922] dark:text-[#101922]">
                    {order?.bookName}
                  </div>
                  <div className="text-slate-500 dark:text-slate-500 text-xs">
                    by {order?.bookAuthor}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-600">
                 {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  { order.status === "in-transit" ? (
                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-blue-200 text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                    In Transit
                  </span> 
                  ) : order.status === "pending" ? (
                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-yellow-200 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800">
                    Pending
                  </span>
                ) : order.status === "pelivered" ? (
                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium  bg-green-200 text-success dark:bg-green-200 text-green-800 dark:text-green-800  ">
                    Delivered
                  </span>
                  ) : order.status === "cancelled" ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-200 text-red-700 dark:bg-red-200 dark:text-red-700">
                    Cancelled
                  </span>
                  ) :(<></>)
                }
                </td>

                <td className="text-center px-6 py-4 whitespace-nowrap">
                  {
                    order.status !== 'cancelled' ? (
                 
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                    order.isPaid ? "bg-green-200 text-success dark:bg-green-200 text-green-800 dark:text-green-800" :
                    "bg-slate-200 text-slate-800 dark:bg-slate-200 dark:text-s  late-800"
                  }`}>
                    {order.isPaid ? "Paid" : "Unpaid"}
                  </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                    N/A
                  </span>
                    )
}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  
                  { order.status === 'cancelled' ? (
                    <span className="text-slate-700 dark:text-slate-700">—</span>
                  ) : order.isPaid ? (
                    <button className="h-8 px-3 font-medium text-blue-400 rounded-md text-sm hover:cursor-pointer transition-colors hover:underline">
                      View Details
                    </button>
                  ) : (
                    <div className="hover:cursor-pointer space-x-2">
                      <button 
                      className="h-8 px-4 font-medium text-white hover:text-blue-700 bg-blue-500 active:bg-blue-100 active:text-blue-800 hover:bg-blue-200 hover:cursor-pointer  rounded-md text-sm transition-colors shadow-sm">
                        Pay Now
                      </button>
                      <button
                      className="h-8 px-4 font-medium text-white hover:text-red-700 bg-red-500 active:bg-red-100 active:text-red-800 hover:bg-red-200 hover:cursor-pointer  rounded-md text-sm transition-colors shadow-sm">
                        Cancel
                      </button>
                    </div>
                  )}
                </td>
              </tr>
                ))
              }
              {/* <tr className="hover:bg-slate-100 hover:cursor-pointer dark:hover:bg-slate-100 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  <div className="font-medium text-[#101922] dark:text-[#101922]">
                    The Midnight Library
                  </div>
                  <div className="text-slate-500 dark:text-slate-500 text-xs">
                    by Matt Haig
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-600">
                  Oct 26, 2023
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-blue-200 text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                    In Transit
                  </span>
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-bg-green-200 text-success dark:bg-green-200 text-green-800 dark:text-green-800  ">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button className="h-8 px-3 font-medium text-blue-400 rounded-md text-sm hover:cursor-pointer transition-colors hover:underline">
                    View Details
                  </button>
                </td>
              </tr> */}

              {/* Pending + Unpaid */}
              {/* <tr className="hover:bg-slate-100 hover:cursor-pointer dark:hover:bg-slate-100 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  <div className="font-medium text-[#101922] dark:text-[#101922]">
                    The Midnight Library
                  </div>
                  <div className="text-slate-500 dark:text-slate-500 text-xs">
                    by Matt Haig
                  </div>
                </td>
               <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-600">
                  Oct 26, 2023
                </td>
               <td className="text-center px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-semibold bg-yellow-200 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-slate-200 text-slate-800 dark:bg-slate-200 dark:text-slate-800">
                    Unpaid
                  </span>
                </td>
                <td className="hover:cursor-pointer px-6 py-4 whitespace-nowrap text-center space-x-2">
                  <button 
                  className="h-8 px-4 font-medium text-white hover:text-blue-700 bg-blue-500 active:bg-blue-100 active:text-blue-800 hover:bg-blue-200 hover:cursor-pointer  rounded-md text-sm transition-colors shadow-sm">
                    Pay Now
                  </button>
                  <button
                  className="h-8 px-4 font-medium text-white hover:text-red-700 bg-red-500 active:bg-red-100 active:text-red-800 hover:bg-red-200 hover:cursor-pointer  rounded-md text-sm transition-colors shadow-sm">
                    Cancel
                  </button>
                </td>
              </tr> */}

              {/* Delivered + Paid */}
              {/* <tr className="hover:bg-slate-100 hover:cursor-pointer dark:hover:bg-slate-100 transition-colors">
                 <td className="px-6 py-4 whitespace-nowrap font-medium">
                  <div className="font-medium text-[#101922] dark:text-[#101922]">
                    The Midnight Library
                  </div>
                  <div className="text-slate-500 dark:text-slate-500 text-xs">
                    by Matt Haig
                  </div>
                </td>
               <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-600">
                  Oct 26, 2023
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium  bg-green-200 text-success dark:bg-green-200 text-green-800 dark:text-green-800  ">
                    Delivered
                  </span>
                </td>
                 <td className="text-center px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-200 text-success dark:bg-green-200 text-green-800 dark:text-green-800  ">
                    Paid
                  </span>
                </td>
               <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button className="h-8 px-3 font-medium text-blue-400 rounded-md text-sm hover:cursor-pointer transition-colors hover:underline">
                    View Details
                  </button>
                </td>
              </tr> */}

              {/* Cancelled + N/A */}
              {/* <tr className="hover:bg-slate-100 hover:cursor-pointer dark:hover:bg-slate-100 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  <div className="font-medium text-[#101922] dark:text-[#101922]">
                    The Midnight Library
                  </div>
                  <div className="text-slate-500 dark:text-slate-500 text-xs">
                    by Matt Haig
                  </div>
                </td>
               <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-600">
                  Oct 26, 2023
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-200 text-red-700 dark:bg-red-200 dark:text-red-700">
                    Cancelled
                  </span>
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                    N/A
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-slate-700 dark:text-slate-700">—</span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      

        {/* Pagination */}
        {/* <div className="flex items-center justify-between mt-6 px-6 py-4 border-t border-slate-200 dark:border-slate-700">
          <button className="px-4 py-2 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            Previous
          </button>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Page 1 of 5
          </span>
          <button className="px-4 py-2 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            Next
          </button>
        </div> */}
      </div>
}
{
      !orders &&
      <p className="text-center text-slate-500 dark:text-slate-400 mt-12">
        No orders found.
      </p>
}
    </div>
        
  );
}
