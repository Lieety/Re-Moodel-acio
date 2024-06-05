'use client'
import '@/components/log/style.css'
import CardSlider from '@/components/log/CardSlider'
import Login from '@/components/log/Login'
import Register from '@/components/log/Register'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function LogIn () {
  const searchParams = useSearchParams()
  const isUser = searchParams.get('isUser')
  const [card, setCard] = useState('')

  return (
    <>
      <div className='relative'>
        <a href='/main'>
          <span className='rounded-full bg-white px-3 py-2 absolute z-20 -top-3 -right-3 text-blue-600 border border-blue-600'>
            ✖
          </span>
        </a>

        <div className={`container ${card}  z-0`} id='container'>
          <Login />
          <Register />
          <div className='overlay-container'>
            <div className='overlay'>
              <div className='overlay-panel overlay-left'>
                <h1>Una nueva aventura?</h1>
                <p>Registrate para llegar a donde quieras</p>
                <button onClick={() => setCard('')} id='logIn'>
                  Iniciar sesión
                </button>
              </div>
              <div className='overlay-panel overlay-right'>
                <h1>Bienvenido de nuevo</h1>
                <p>Inicia sesión para acceder a todo tu contenido</p>
                <button
                  onClick={() => setCard('right-panel-active')}
                  id='signIn'
                >
                  Registrarme
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
