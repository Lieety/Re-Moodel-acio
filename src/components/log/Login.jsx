'use client'
import React, { useState } from 'react'
import './style.css'
import { FaRegEyeSlash, FaRegEye, FaFacebook, FaGoogle } from "react-icons/fa";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setShowPass(!showPass);
  };

  return (
    <div className='form-container sign-in-container'>
      <form action="">
        <h1>Iniciar sesión</h1>
        <div className='social-container'>
          <a className='social-login' href=""><FaFacebook /></a>
          <a className='social-login' href=""><FaGoogle /></a>
        </div>
        <span>o utiliza tu mail</span>
        <input className='input' type="text" placeholder='nombre' style={{ width: '100%' }} required />
        <input className='input' type="email" placeholder='e-mail' style={{ width: '100%' }} required />
        <div className="password-container" style={{ width: '100%' }}>
          <input
          className='input'
            type={showPass ? 'text' : 'password'}
            placeholder='contraseña'
            value={password}
            id='password'
            onChange={handlePasswordChange}
            required
            style={{ width: '100%' }}
          />
          <span className="show-password-checkbox">
            <button
              id="showPassword"
              onClick={togglePasswordVisibility}
            >
              <label htmlFor="showPassword">
              {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </label>
            </button>
            
          </span>
        </div>
        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}