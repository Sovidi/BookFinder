import './globals.scss'
import Context from './components/Context'

export default function RootLayout({ children }) {
  return (
    <Context>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Context>
  )
}
