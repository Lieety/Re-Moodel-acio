'use client'
// src/App.js
import React from 'react'
import './about.css'
import NavBar from '@/components/NavBar'
import AboutCard from '@/components/AboutCard'
const App = () => {
  return (
    <>
      <NavBar id='about' />
      <h1 className='text-center'>Sobre el proyecto</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-8'>
        <div className='grid gap-4'>
          <AboutCard color='bg-blue-300'>
            <h2>Porque?</h2>
            <p>
              Este proyecto se engloba dentro de un Trabajo de Investigación de
              tres alumnos de primero de bachillerato del instituto Badalona VII
              que quieren facilitar el dia a dia de aquellos que rodean la
              educación
            </p>
          </AboutCard>
          <AboutCard color='bg-cyan-600'>
            <h1>Hola</h1>
          </AboutCard>
          <AboutCard color='bg-orange-600'>
            <h1>Hola</h1>
          </AboutCard>
        </div>
        <div className='grid gap-4'>
          <AboutCard color='bg-orange-300'>
            <h2>Porque?</h2>
          </AboutCard>
          <AboutCard color='bg-cyan-600'>
            <h1>Hola</h1>
          </AboutCard>
          <AboutCard color='bg-orange-600'>
            <h1>Hola</h1>
          </AboutCard>
        </div>
        <div className='grid gap-4'>
          <AboutCard color='bg-orange-300'>
            <h2>Porque?</h2>
          </AboutCard>
          <AboutCard color='bg-cyan-600'>
            <h1>Hola</h1>
          </AboutCard>
          <AboutCard color='bg-orange-600'>
            <h1>Hola</h1>
          </AboutCard>
        </div>
        <div className='grid gap-4'>
          <AboutCard color='bg-orange-300'>
            <h2>Porque?</h2>
          </AboutCard>
          <AboutCard color='bg-cyan-600'>
            <h1>Hola</h1>
          </AboutCard>
          <AboutCard color='bg-orange-600'>
            <h1>Hola</h1>
          </AboutCard>
        </div>
      </div>
    </>
  )
}

export default App
