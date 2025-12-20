# 📚 BookCourier – Library-to-Home Delivery System

**BookCourier** is a full-stack library delivery management system that allows users to request book pickup or delivery from nearby libraries. It is designed to help students, researchers, and readers borrow and return books conveniently without physically visiting a library.

🔗 **Live Website:** https://bookcourier02.netlify.app/  
🔗 **Client Repository:** https://github.com/FahimHaowlader/BookCourier    
🔗 **Server Repository:** https://github.com/FahimHaowlader/BookCourier-backend   

---

## 🎯 Project Purpose

The goal of BookCourier is to digitize and simplify the traditional library borrowing system by:
- Enabling online book discovery
- Allowing home delivery of books
- Managing orders efficiently for users, librarians, and admins
- Providing role-based dashboards with secure access

This project was built as part of a skill assessment to demonstrate real-world MERN stack development, clean UI design, and production-ready deployment.

---

## 🖼️ Screenshots

_Add screenshots of the following pages:_

- Home Page  
- All Books Page  
- Book Details Page  
- User Dashboard  
- Librarian Dashboard  
- Admin Dashboard  

---

## 🛠️ Technologies Used

### Frontend
- React (Vite)
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- Axios
- React Hot Toast
- React Icons
- Swiper.js

### Backend
- Node.js
- Express.js
- MongoDB
- Firebase Admin SDK
- JSON Web Token (JWT)
- CORS
- dotenv

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- Email & Password login
- Google social login
- Role-based access control (User, Librarian, Admin)
- Firebase token verification for protected routes
- Persistent login on page reload

---

### 🏠 Home Page
- Banner with at least 3 sliders
- Latest books section (4–6 recent books)
- Coverage section with map
- “Why Choose BookCourier” section
- Animated section
- 2 additional custom-designed sections

---

### 📚 All Books & Book Details
- Card-based layout for all books
- Search books by name
- Sort books by price
- Detailed book information page
- Wishlist functionality
- Review & rating system (only for ordered books)

---

### 🛒 Order System
- Order books via modal form
- Default order status: `pending`
- Payment status: `unpaid`
- Cancel order if status is pending
- Pay Now option
- Order status flow:
  - `pending → shipped → delivered`
  - `cancelled`

---

## 👤 User Dashboard
- My Orders (Cancel / Pay options)
- My Wishlist
- My Profile (update name & image)
- Invoices with payment history

---

## 📘 Librarian Dashboard
- Add new books
- Publish / Unpublish books
- View and edit own books
- Manage orders for own books
- Update order status
- Cancel orders when necessary

---

## 🛡️ Admin Dashboard
- View all registered users
- Promote users to Librarian or Admin
- Manage all books
- Publish / Unpublish / Delete books
- Deleting a book also deletes related orders
- Admin profile management

---

## 🎨 UI & UX Highlights
- Clean and recruiter-friendly design
- Light / Dark mode toggle
- Fully responsive layout
- Consistent typography and color scheme
- Equal-height cards and grids
- New **X (Twitter)** logo used
- Sidebar-based dashboard layout

---

## 📦 NPM Packages Used

### Client
- react-router-dom
- firebase
- axios
- react-hot-toast
- react-icons
- swiper

### Server
- express
- mongodb
- cors
- dotenv
- jsonwebtoken
- firebase-admin

---

## 🔒 Security
- Firebase keys secured using environment variables
- MongoDB credentials secured using `.env`
- JWT verification for protected API routes
- Firebase domain authorization configured for deployment

---

## 🚀 Deployment
- Client deployed on **Vercel / Netlify**
- Server deployed on **Vercel**
- No CORS / 404 / 504 errors
- SPA reload handling configured
- Private routes persist on reload

---

## 🧪 How to Run Locally

### Client
```bash
git clone https://github.com/FahimHaowlader/BookCourier
cd bookcourier-client
npm install
npm run dev
