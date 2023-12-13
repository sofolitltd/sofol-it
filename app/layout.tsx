import type { Metadata } from 'next'
import {Geologica } from 'next/font/google'

import './globals.css'
import Navbar from '../components/navbar'
import Footer from '@/components/footer'



const geologica = Geologica({weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" ,"800" , "900"], subsets:['latin']})

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

      <body className={geologica.className}>
        <Navbar />
        {children}</body>
        <Footer />
      
    </html>
  )
}
