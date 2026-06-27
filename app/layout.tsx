/**
 * Root layout for the app
 */
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'CPTWEBS Lead Engine',
  description: 'Find, score, and prioritize local leads and generate outreach',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen">
          <Navbar />
          <main className="max-w-7xl mx-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
