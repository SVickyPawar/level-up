import React, { useContext } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {
    const navigate = useNavigate();

    const {isAuthinticated,login} = useContext(AuthContext);

  return (
    <div className='login-container'>
        <form onSubmit={login}>
            <div>
                <label >Username</label>
                <input type="text" placeholder='Enter username' />
            </div>
            <div>
                <label >Password</label>
                <input type="password" placeholder='Enter password' />
            </div>
            <div>
                <input type="submit" value={isAuthinticated ? 'Logout' : 'Login'} />
            </div>
        </form>
    </div>
  )
}

export default Login