import { useMemo, useState } from "react";

const ORDERS_DATA = [
  {
    id: "BKC-8923",
    book: "The Midnight Library",
    user: "Leo Carter",
    date: "Oct 26, 2023",
    status: "Pending",
  },
  {
    id: "BKC-8923",
    book: "The Midnight Library",
    user: "Leo Carter",
    date: "Oct 26, 2023",
    status: "Pending",
  },
  {
    id: "BKC-8923",
    book: "The Midnight Library",
    user: "Leo Carter",
    date: "Oct 26, 2023",
    status: "Pending",
  },
  {
    id: "BKC-8922",
    book: "Project Hail Mary",
    user: "Ava Martinez",
    date: "Oct 25, 2023",
    status: "Shipped",
  },
  {
    id: "BKC-8921",
    book: "Klara and the Sun",
    user: "Noah Rodriguez",
    date: "Oct 25, 2023",
    status: "Delivered",
  },
  {
    id: "BKC-8920",
    book: "The Four Winds",
    user: "Mia Chen",
    date: "Oct 24, 2023",
    status: "Canceled",
  },
  {
    id: "BKC-8919",
    book: "Atomic Habits",
    user: "Elijah Kim",
    date: "Oct 23, 2023",
    status: "Delivered",
  },
  {
    id: "BKC-8918",
    book: "Dune",
    user: "Sophia Williams",
    date: "Oct 22, 2023",
    status: "Shipped",
  },
];

const STATUS_STYLES = {
  Pending:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-100 dark:text-yellow-700",
  Shipped: "bg-blue-100 text-blue-800 dark:bg-blue-100 dark:text-blue-700",
  Delivered:
    "bg-green-100 text-green-800 dark:bg-green-100 dark:text-green-700",
  Canceled: "bg-red-100 text-red-800 dark:bg-red-100 dark:text-red-700",
};

export default function OrdersPage() {
  const [orders, setOrders] = useState(ORDERS_DATA);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const pageSize = 6;

  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const matchesSearch =
        o.book.toLowerCase().includes(search.toLowerCase()) ||
        o.user.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = statusFilter === "All" || o.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  const totalPages = Math.ceil(filteredOrders.length / pageSize);

  const paginatedOrders = filteredOrders.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const updateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-900">
          Manage Orders
        </h1>
        <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
          View and manage all book orders
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
  {/* Left: Search */}
  <div className="flex items-center gap-3 flex-1 ">
    <input
      className="w-full max-w-sm pl-4 pr-4 py-2.5 border rounded-lg bg-white text-black"
      placeholder="Search by book, user, or ID..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setPage(1);
      }}
    />

    <button
      onClick={() => setPage(1)}
      className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90"
    >
      Search
    </button>
  </div>

  {/* Right: Status Filter */}
  <select
    className="pl-4 pr-10 py-2.5 font-medium rounded-lg bg-slate-900 text-white  hover:text-slate-800 hover:cursor-pointer hover:bg-slate-300"
    value={statusFilter}
    onChange={(e) => {
      setStatusFilter(e.target.value);
      setPage(1);
    }}
  >
    <option value="All">All Status</option>
    <option value="Pending">Pending</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
    <option value="Canceled">Canceled</option>
  </select>
</div>


      {/* Table */}
      <div className="bg-white dark:bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-white dark:bg-slate-900 text-xs uppercase">
            <tr>
              <th className="px-6 py-4 text-left">Order Details</th>
              <th className="px-6 py-4 text-left">User</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {paginatedOrders.map((order) => (
              <tr
                key={order.id}
                className="bg-white hover:bg-slate-100 dark:hover:bg-slate-100 hover:cursor-pointer"
              >
                <td className="px-6 py-4 text-slate-900">
                  <p className="font-semibold">{order.book}</p>
                  <p className="text-xs text-slate-600 font-mono">
                    #{order.id}
                  </p>
                </td>

                <td className="px-6 py-4">
                  <p className="font-medium text-black">{order.user}</p>
                  <p className="text-xs text-slate-600">{order.date}</p>
                </td>

                <td className="text-center px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      STATUS_STYLES[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  {order.status === "Pending" && (
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => updateStatus(order.id, "Shipped")}
                        className="h-8 px-4 font-medium text-white hover:text-blue-700 bg-blue-500 active:bg-blue-100 active:text-blue-800 hover:bg-blue-200 hover:cursor-pointer  rounded-md text-sm transition-colors shadow-sm"
                      >
                        Ship
                      </button>                     
                      <button
                        onClick={() => updateStatus(order.id, "Canceled")}
                           className="h-8 px-4 font-medium text-white hover:text-red-700 bg-red-500 active:bg-red-100 active:text-red-800 hover:bg-red-200 hover:cursor-pointer  rounded-md text-sm transition-colors shadow-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                  {order.status === "Shipped" && (
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => updateStatus(order.id, "Delivered")}
                        className="h-8 px-4 font-medium text-white hover:text-green-700 bg-green-500 active:bg-green-100 active:text-green-800 hover:bg-green-200 hover:cursor-pointer  rounded-md text-sm transition-colors shadow-sm"
                      >
                        Deliver
                      </button>
                      <button
                        onClick={() => updateStatus(order.id, "Canceled")}
                           className="h-8 px-4 font-medium text-white hover:text-red-700 bg-red-500 active:bg-red-100 active:text-red-800 hover:bg-red-200 hover:cursor-pointer  rounded-md text-sm transition-colors shadow-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                  {(order.status === "Delivered" ||
                    order.status === "Canceled") && (
                    <span className="text-xs text-slate-400 italic">
                      No actions available
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {/* <div className="px-6 py-4 flex justify-between items-center border-t">
          <span className="text-sm text-slate-500">
            Showing {(page - 1) * pageSize + 1}–
            {Math.min(page * pageSize, filteredOrders.length)} of{" "}
            {filteredOrders.length}
          </span>

          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-2 border rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-2 border rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
