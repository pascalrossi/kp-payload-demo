import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kaiser Partner Wealth Advisors',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @font-face {
            font-family: 'Calibri Light';
            src: url('/fonts/calibri-light.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Calibri Bold';
            src: url('/fonts/calibri-bold.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Cambria';
            src: url('/fonts/cambria.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'kpicons';
            src: url('/fonts/kpicons.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: block;
          }
        `}</style>
      </head>
      <body style={{ margin: 0, padding: 0, background: 'rgb(236, 236, 230)' }}>{children}</body>
    </html>
  )
}
