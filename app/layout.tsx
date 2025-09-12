
// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayodeji Akinbile - Startup Founder & Full-Stack Developer',
  icons:{
    icon:'/favicon.ico'
  },
  description: 'Startup Founder building conversation intelligence technology. Full-stack developer with cybersecurity expertise and teaching experience.',
  keywords: 'Full-Stack Developer, Cybersecurity, Startup Founder, Software Engineer',
  authors: [{ name: 'Ayodeji Akinbile' }],
  openGraph: {
    title: 'Ayodeji Akinbile - Startup Founder & Full-Stack Developer',
    description: 'Building your digital twin',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-hero-pattern min-h-screen text-primary-100`}
      suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}