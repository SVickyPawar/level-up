import React, {useContext} from 'react'
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RequireAuth = ({children}) => {
    const navigate =  useNavigate();
    const {pathname} = useLocation();
    const {isAuthinticated} = useContext(AuthContext);
  if(isAuthinticated){
    return (children)
  }else{
    <Navigate to='/login' state={{from:pathname}} replace />
  }
}

export default RequireAuth