export const metadata = {
  title: 'Main',
  description: 'a'
}

export default function MainLayout ({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
