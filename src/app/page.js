import NavBar from '@/components/NavBar'
import './globals.css'
import '@/app/layout'
import main from './api/auth/register/demo'

export default function Home () {
  main()
  return (
    <>
      <NavBar id='home' />
    </>
  )
}
