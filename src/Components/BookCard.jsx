import React from 'react'

const BookCard = () => {
  return (
 <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 hover:scale-[1.03] transition-transform">
<div className="relative">
<img src={b.img} alt={b.title} className="rounded-lg w-full h-72 object-cover" />
</div>
<h3 className="font-bold text-lg mt-4">{b.title}</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm">{b.author}</p>
<p className="font-semibold text-lg mt-2">₹{b.price}</p>
<button className="w-full rounded-lg bg-slate-900 dark:bg-primary text-white py-2 mt-4 hover:opacity-90">View Details</button>
</div>
  )
}

export default BookCard
