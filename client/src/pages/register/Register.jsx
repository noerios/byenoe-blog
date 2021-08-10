import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css";
import axios from "axios";


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        try{
            setError(false);
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
        }
    };
        
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter your username..."
                    onChange={e=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter email..."
                    onChange={e=>setEmail(e.target.value)}
                />
                
                <label>Password</label>
                <input 
                    type="password" 
                    className="registerInput" 
                    placeholder="Enter password..."
                    onChange={e=>setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
            {error && <span style={{color: "red", marginTop: "10px", backgroundColor: "inherit"}}>Something went wrong!</span>}
        </div>
    );
}

export default Register;
