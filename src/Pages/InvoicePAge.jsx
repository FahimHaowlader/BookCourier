import  {useState,useEffect} from "react";
import { TbSearch } from "react-icons/tb";
import { FiDownloadCloud } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";





export default function InvoicePage() {

  const { user } = useAuth();
  console.log("User in InvoicePage:", user?.email);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
  const fetchOrders = async () => {
    try {
      // console.log("Fetching orders for user:", user?.email);
      const response = await axios.get(
        `http://localhost:3000/orders?email=${user?.email}`
      );
      // console.log("Orders fetched:", response.data);

      const userOrders = response.data.filter(
        (order) => order.isPaid === true
      );
      // console.log("Filtered paid orders:", userOrders);

      setOrders(userOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };


    fetchOrders();
    

}, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-8">
      {/* Page Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <p className="text-slate-900 dark:text-slate-900 text-3xl font-bold leading-tight tracking-tight">
            Invoices
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-base font-normal leading-normal">
            Review your payment history and download receipts.
          </p>
        </div>
        <button
         className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-800 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
          <span className="truncate">Export as CSV</span>
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
           <FiDownloadCloud />
          </span>
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-stretch rounded-lg h-12 bg-white dark:bg-white border border-slate-200 dark:border-slate-200">
              <div className="text-slate-900 dark:text-slate-900 flex items-center justify-center pl-4">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 24 }}
                >
                  <TbSearch />
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 resize-none rounded-lg text-slate-900 dark:text-slate-900 focus:outline-0 border-none bg-transparent h-full placeholder:text-slate-400 dark:placeholder:text-slate-500 px-2 text-base "
                placeholder="Search by Payment ID or Book Title"
              />
            </div>
          </label>
        </div>

        <div className="flex gap-3 items-center">
          <button 
           className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg  px-4 bg-slate-800 hover:bg-slate-300 hover:text-slate-700 text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
            <p className=" font-semibold ">
              Date 
            </p>
            <span
              className="material-symbols-outlined "
              style={{ fontSize: 20 }}
            >
              <IoIosArrowDown />
            </span>
            
          </button>
        </div>
      </div>

      {/* Table */}
      {orders && 
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-200 bg-white dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800 dark:bg-slate-800">
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-white">
                  Payment ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-white">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-white">
                  Book Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-white">Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-white">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 dark:divide-slate-200">
              {/* Example Row */}
              {orders.map((order) => (
                <tr key={order._id} className="bg-white dark:bg-white hover:bg-slate-100 hover:dark:hover:bg-slate-100 hover:cursor-pointer">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 ">
                    {order._id}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 ">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                    <td className="px-6 py-4 text-sm text-slate-800 ">
                    {order.bookName}
                  </td>
                   <td className="px-6 py-4 text-sm text-slate-800 ">
                    ${order.price}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center rounded-full bg-green-300 dark:bg-green-300 px-3 py-1 text-xs font-medium text-slate-900 dark:text-slate-900">
                      Paid
                    </span>
                  </td>
                </tr>
              ))}

              {/* Static Example Rows */}
              {/* <tr className="bg-white dark:bg-white hover:bg-slate-100 hover:dark:hover:bg-slate-100 hover:cursor-pointer">
                <td className="px-6 py-4 text-sm font-medium text-slate-800 ">
                  #BKC-0823
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 ">
                  Aug 23, 2023
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 ">
                  The Midnight Library
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 ">
                  $5.99
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-green-300 dark:bg-green-300 px-3 py-1 text-xs font-medium text-slate-900 dark:text-slate-900">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="bg-white dark:bg-white hover:bg-slate-50 hover:dark:hover:bg-slate-50 hover:cursor-pointer">
                <td className="px-6 py-4 text-sm font-medium text-slate-800 ">
                  #BKC-0823
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 ">
                  Aug 23, 2023
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 ">
                  The Midnight Library
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 ">
                  $5.99
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-green-300 dark:bg-green-300 px-3 py-1 text-xs font-medium text-slate-900 dark:text-slate-900">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="bg-white dark:bg-white hover:bg-slate-50 hover:dark:hover:bg-slate-50 hover:cursor-pointer">
                <td className="px-6 py-4 text-sm font-medium text-slate-800 ">
                  #BKC-0823
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 ">
                  Aug 23, 2023
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 ">
                  The Midnight Library
                </td>
                <td className="px-6 py-4 text-sm text-slate-800 ">
                  $5.99
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-green-300 dark:bg-green-300 px-3 py-1 text-xs font-medium text-slate-900 dark:text-slate-900">
                    Paid
                  </span>
                </td>
              </tr> */}
              
            </tbody>
          </table>

          {/* Pagination */}
          {/* <div className="flex items-center justify-between mt-6">
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
      </div> }
      {!orders && <p className="text-center text-slate-600 dark:text-slate-400">No invoices found.</p>}
    </div>
  );
}