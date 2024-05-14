'use client'
import React, { useState } from 'react'
import './style.css'

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  return (
    <div className='form-container sign-in-container'>
      <form action="">
        <h1>Iniciar sesión</h1>
        <div className='social-container'>
          <a href="">fbook</a>
          <a href="">google</a>
        </div>
        <span>o utiliza tu mail</span>
        <input type="text" placeholder='nombre' required />
        <input type="email" placeholder='e-mail' required />
        <div className="password-container">
          <input
            type={showPass ? 'text' : 'password'}
            placeholder='contraseña'
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="show-password-checkbox">
            <input
              type="checkbox"
              id="showPassword"
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword">
              {showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            </label>
          </div>
        </div>
        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}
