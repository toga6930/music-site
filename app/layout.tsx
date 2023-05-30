import './globals.css'
import Navbar from './components/Navbar'
import Player from './components/Player'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Player/>
      </body>
    </html>
  )
}
