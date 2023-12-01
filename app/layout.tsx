import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Mathieu Brochard - AWS Solutions Architect</title>
        <meta
          name="description"
          content="Personal portfolio of Mathieu Brochard - AWS Solutions Architect"
        ></meta>
      </head>

      <body>
        <div className="container mx-auto p-6 sm:max-w-6xl">
          {children}

          <Analytics />
        </div>
      </body>
    </html>
  )
}
