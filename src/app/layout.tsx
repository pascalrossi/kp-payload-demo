import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kaiser Partner Wealth Advisors',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: 'rgb(236, 236, 230)' }}>{children}</body>
    </html>
  )
}
