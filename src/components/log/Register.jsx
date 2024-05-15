'use client'
import React, { useState } from 'react'
import './style.css'
import { FaRegEyeSlash, FaRegEye, FaFacebook, FaGoogle } from "react-icons/fa";


export default function Register () {
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
    <div className='form-container sign-up-container'>
      <form action="" className=''>
        <h1>Crear cuenta</h1>
        <div className='social-container'>
        <a className='social-login' href=""><FaFacebook /></a>
          <a className='social-login' href=""><FaGoogle /></a>
        </div>
        <span>o utiliza tu mail</span>
        <input className='input' type="text" placeholder='nombre' required />
        <input className='input' type="email" placeholder='e-mail' required />
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
        <select className='input' name="role" id="role" >
          <option value="Profesor">Profesor/a</option>
          <option value="Alumno">Alumno/a</option>
          <option value="Gestor">Gestor/a</option>
        </select>
        <input type="submit" value="Sign up" />
      </form>
    </div>
  )
}
