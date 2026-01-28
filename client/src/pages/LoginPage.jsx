import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginPage(){
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
            await axios.post('/login', {email,password});
            alert('Login successful!')
        }catch(e){
            alert('Login failed. Please check your credentials and try again.')
        }
    }

    return (
        <div className="mt-4 grow flex flex-col justify-around">
            <div className="mb-42">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                <input type="email" placeholder="Enter your email" 
                    value={email}
                    onChange={ev =>setEmail(ev.target.value)}
                     />
                <input type="password" placeholder="Enter your password" 
                    value={password}
                    onChange={ev =>setPassword(ev.target.value)}
                /> 
                <button className="primary" type="submit">Login</button>

                <div className="text-center py-2 text-gray-500">Don't have an account? 
                 <Link to={'/register'} className="underline text-black">Register now</Link>
                </div>  
            </form>
            </div>
            
        </div>
    )
}