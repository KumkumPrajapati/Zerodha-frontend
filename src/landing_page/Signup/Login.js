import React, {useState} from 'react'
import {ToastContainer} from 'react-toastify'
import { Link , useNavigate} from 'react-router-dom'
import { handleError, handleSuccess } from '../Util';


function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
})

const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
}

const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
        return handleError('email and password are required')
    }
    try {
        const url = `https://zerodha-backend-adoh.onrender.com/auth/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        const { success, message, jwtToken, name, error } = result;
        if (success) {
            handleSuccess(message);
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('loggedInUser', name);
            setTimeout(() => {
              window.location.href ='https://zerodha-dashboard-nsoh.onrender.com/';
              //window.location.href = `https://zerodha-dashboard-nsoh.onrender.com/?token=${jwtToken}&name=${encodeURIComponent(name)}`;

            }, 1000)
        } else if (error) {
            const details = error?.details[0].message;
            handleError(details);
        } else if (!success) {
            handleError(message);
        }
        console.log(result);
    } catch (err) {
        handleError(err);
    }
}

  return (
    <div className='form-main-container'>
    <div className="form_container ">
      <h2>Login Account</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
           onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginInfo.email}
           
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginInfo.password}
          />
        </div>
         <button type="submit">Submit</button>        <span>
            Create a new account <Link to={"/Signup"}>Signup</Link>
          </span>
          
      </form>
    </div>
    <ToastContainer/>
    </div>
 
  )
}

export default Login;
