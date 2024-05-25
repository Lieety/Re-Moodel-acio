'use client'
import React, { useState } from 'react'
import './style.css'
import { FaRegEyeSlash, FaRegEye, FaFacebook, FaGoogle } from "react-icons/fa";
import {useForm} from 'react-hook-form'


export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

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
      <form action="" onSubmit={ handleSubmit(onSubmit)}>
        <h1>Iniciar sesión</h1>
        <div className='social-container'>
          <a className='social-login' href=""><FaFacebook /></a>
          <a className='social-login' href=""><FaGoogle /></a>
        </div>
        <span>o utiliza tu mail</span>
        <input {...register('name', { required: true})} className='input' type="text" placeholder='nombre' style={{ width: '100%' }}  />
        <span className=' text-xs text-red-800'>{errors?.password?.type === 'required'&& 'El nombre es obligatorio'}</span>
        <input {...register('e-mail', { required: true})} className='input' type="email" placeholder='e-mail' style={{ width: '100%' }}  />
        <span className=' text-xs text-red-800'>{errors?.password?.type === 'required'&& 'El correo es obligatorio'}</span>
        <div className="password-container" style={{ width: '100%' }}>
          <input
          {...register('password', { required: true, minLength:8})}
          className='input'
            type={showPass ? 'text' : 'password'}
            placeholder='contraseña'
            value={password}
            id='password'
            onChange={handlePasswordChange}
            
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
        <span className=' text-xs text-red-800'>{errors?.password?.type === 'minLength'&& 'La contraseña debe tener minimo 8 caracteres'}</span>
        <span className=' text-xs text-red-800'>{errors?.password?.type === 'required'&& 'La contraseña es obligatoria'}</span>
        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}