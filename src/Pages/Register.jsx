import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  // register auth code starting 
  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })
  const [err, setError] = useState(null);
  const navigate =  useNavigate()

  const handleChange = e=>{
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))

  }
  const handleSubmit = async e =>{
    e.preventDefault();
    try{
    await axios.post("/auth/register",inputs);
    navigate("/login")
    
    }catch(err){
      setError(err.response.data);
    }

  }
  //register auth code ending
  return (
    
    <div className='auth'>
<h1>Register</h1>
<form>
    <input type="text" placeholder="Username" required name='username' onChange={handleChange}/>
    <input type="email" placeholder="Email" required name='email'  onChange={handleChange}/>
    <input type="password" placeholder="Password" required name='password'  onChange={handleChange}/>
    <button onClick={handleSubmit}>Register</button>
   {err && <p>{err}</p>}
    <span>Have an account? <Link to="/login">Login</Link></span>
</form>
    </div>
  )
}

export default Register;