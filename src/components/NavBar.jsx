'use client'
import Link from "next/link"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Layout() {
  const router = useRouter()
  return(
    <div className='container'>
          <header className='d-flex flex-wrap flex-row align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
            <div className='col-md-3 mb-2 mb-md-0 -mr-10'>
              <a
                href='/'
                className='d-inline-flex link-body-emphasis text-decoration-none '
              >
                <img
                  src='/logo.jpg'
                  alt='insti logo'
                  width={68}
                  height={60}
                ></img>
              </a>
            </div>

            <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
              <li>
                <a href='/' className='nav-link px-2 link-secondary'>
                  Home
                </a>
              </li>
              <li>
                <a href='/features' className='nav-link px-2'>
                  Features
                </a>
              </li>
              <li>
                <a href='/pricing' className='nav-link px-2'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='/faqs' className='nav-link px-2'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='/about' className='nav-link px-2'>
                  About
                </a>
              </li>
            </ul>

            <div className='col-md-3 text-end'>
              <Link href='/login'>
              <button type='button' className='btn btn-outline-primary me-2'>
                Login
              </button>
              </Link>
              <Link href='/login'>
              <button type='button' className='btn btn-primary'>
                Sign-up
              </button>
              </Link>
            </div>
          </header>
        </div>
  )
}