import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'News Homepage',
  description: 'What&lsquo;s new in a new way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
