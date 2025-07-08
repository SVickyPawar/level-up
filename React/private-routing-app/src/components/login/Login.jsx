import React, { useContext } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {
    const navigate = useNavigate();

    const {isAuthinticated,setIsAuthinticated} = useContext(AuthContext);

    console.log(isAuthinticated,"isAuthinticated");



    const handleSubmit = (e) => {
        e.preventDefault()
        setIsAuthinticated(!isAuthinticated);
    }
  return (
    <div className='login-container'>
        <form onSubmit={handleSubmit}>
            <div>
                <label >Username</label>
                <input type="text" placeholder='Enter username' />
            </div>
            <div>
                <label >Password</label>
                <input type="password" placeholder='Enter password' />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    </div>
  )
}

export default Login