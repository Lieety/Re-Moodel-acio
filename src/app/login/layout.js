import NavBar from '@/components/NavBar'
import '@/components/log/style.css'

export const metadata = {
  title: 'b',
  description: 'a'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
