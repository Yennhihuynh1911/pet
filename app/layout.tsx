import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { Provider } from "./provider"
import Link from "next/link"
import { CartButton } from "@/components"
import { cart } from "@/constant/cart"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pet Store",
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = cart

  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Provider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              margin: 0,
              background: "#fff",
              position: "relative",
            }}
          >
            <header
              style={{
                position: "fixed",
                top: 0,
                zIndex: 10,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                boxShadow: "0px 0px 6px rgba(0,0,0,.6)",
              }}
            >
              <div style={{ width: "1200px", height: "100%" }}>
                <div
                  style={{
                    padding: "16px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    style={{
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "28px",
                      color: "#000",
                    }}
                    href={"/"}
                  >
                    PET STORE
                  </Link>
                  <CartButton badgeNum={data?.length} />
                </div>
              </div>
            </header>
            <main
              style={{
                flex: 1,
                padding: "64px 0px 0px 0px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  )
}
