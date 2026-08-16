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
        {/* Adobe Typekit — same kit as kaiserpartner.com, loads Calibri Light/Bold + Cambria */}
        <link href="https://use.typekit.net/mmu8oht.css" rel="stylesheet" />
        {/* Lato as fallback for Calibri Light/Bold on systems where Typekit is blocked */}
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: 'rgb(236, 236, 230)' }}>{children}</body>
    </html>
  )
}
