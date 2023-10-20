import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GreenThumb',
  description: 'GreenThumb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-app.darkGreen`}>
        {/* <div className=' bg-app.darkGreen h-screen w-screen'> */}
        {children}
        {/* </div> */}
        </body>
    </html>
  )
}
