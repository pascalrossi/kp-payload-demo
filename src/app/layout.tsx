import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kaiser Partner',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, background: '#eeeae4' }}>{children}</body>
    </html>
  )
}
