import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'b',
  description: 'a'
}

export default function LoginLayout ({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
