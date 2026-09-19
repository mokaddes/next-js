import './globals.css'

export const metadata = {
  title: 'Todo Creator | Next.js 13',
  description: 'A Next.js 13 App Router learning project'
}

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto min-h-screen max-w-4xl px-6 py-10">
          {children}
          {modal}
        </main>
      </body>
    </html>
  )
}
