import React from 'react'
import LoadingSpiner from './LoadingSpiner'
import { Navigate, useLocation } from 'react-router'
import { useAuth } from '../Context/AuthContext'
// const PrivateRoute = ({children}) => {
//    const location = useLocation()
//     // console.log(location?.pathname)
//     const {user,loading} = useAuth()
//     // console.log(user,loading)
//     if(loading){
//         return <div><LoadingSpiner/></div>
//         }
//         if(user ){
//             return children
//             }
//   return (
//     <Navigate to='/login' state={location?.pathname}></Navigate>
//   )
// }

// export default PrivateRoute


const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpiner />;

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
