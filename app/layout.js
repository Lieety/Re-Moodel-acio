import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es' className='flex flex-col-reverse'>
      <NavBar suppressHydrationWarning />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
