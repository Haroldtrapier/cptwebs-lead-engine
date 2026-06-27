import type {ReactNode} from 'react'
import './globals.css'
import Navbar from '../components/Navbar'
export const metadata={title:'CPTWEBS Lead Engine',description:'Find, score, and prioritize website opportunities for churches and small businesses.'}
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body><Navbar/><main className="shell">{children}</main></body></html>}
