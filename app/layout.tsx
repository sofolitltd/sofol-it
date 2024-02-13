import type { Metadata } from 'next'
import {Poppins } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'


const poppins = Poppins({weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" ,"800" , "900"], subsets:['latin']})

export const metadata: Metadata = {
  title: "Sofol IT",
  description: 'Success Begins Here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <Navbar />
        {children}</body>
        <Footer />
      
    </html>
  )
}
