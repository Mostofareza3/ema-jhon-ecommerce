import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const history = useHistory();
    const location = useLocation()


    const { signInUsingGoogle, signUpWithEmailPassword, error } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    console.log(error);

    const handleEmailLogIn = (e) => {
        e.preventDefault()
        console.log(email, password);
        signUpWithEmailPassword(email, password,name, history)

    }

    const getName = (e) => {
        setName(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit={handleEmailLogIn}>
                    <input type="text" onBlur={getName} name="" id="" placeholder="Your Name" /> <br />
                    <input type="email" onBlur={getEmail} name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" onBlur={getPassword} name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button onClick={handleGoogleSignIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;