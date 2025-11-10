import React from 'react'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log("formData", formData);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Login</label>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Enter email' />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Enter password' />
                </div>
                <div>
                    <input type="submit" value='Submit' />
                </div>
            </form>
        </div>
    )
}

export default Login