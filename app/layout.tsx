import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "গরিবের দোকানে আইসোস কারণ তোর হাজার টাকা নাই খানকির পোলা",
  description: "সাশ্রয়ী দামে প্রিমিয়াম পণ্য যদি লাগে তো লয়ে যাও রস টপ টপ (রাফি)এর কাছ থেকে",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="backdrop-blur-md bg-white/60 border-t border-white/20 py-8 mt-16">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>&copy; ২০২৫ এ আয়েশাও যদি তোমার টাকা না থাকে তাহলে ভাই তুমি ভোদাই।</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
