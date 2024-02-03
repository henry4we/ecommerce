import React, { useContext } from 'react'
import { Store } from '../Store';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
 const {state :{userInfo}}= useContext(Store)
  return  userInfo ? children  : <Navigate to="/signin" />
}

export default ProtectedRoute;