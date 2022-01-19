import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, signInWithEmailPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('');


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                // history.push('/')
            })
    }
    const handleEmailLogIn = (e)=>{
        e.preventDefault();
        signInWithEmailPassword(email, password, history)
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit={handleEmailLogIn}>
                    <input onBlur={(e)=> setEmail(e.target.value)} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={(e)=> setPassword(e.target.value)} type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;