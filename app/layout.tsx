import Head from "next/head"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <title>Mathieu Brochard - AWS Solutions Architect</title>
        <meta
          name="description"
          content="Personal portfolio of Mathieu Brochard - AWS Solutions Architect"
        ></meta>
      </Head>

      <body>
        <div className="container max-w-6xl mx-auto px-6 py-6 flex flex-col items-center">
          {children}

          <Analytics />
        </div>
      </body>
    </html>
  )
}
