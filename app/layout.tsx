import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "গরিবের দোকান - সাশ্রয়ী দামে প্রিমিয়াম পণ্য",
  description: "সাশ্রয়ী দামে অসাধারণ পণ্য আবিষ্কার করুন। আমাদের প্রিমিয়াম পণ্যের হাতে বাছাই করা সংগ্রহ দেখুন।",
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
              <p>&copy; ২০২৪ গরিবের দোকান। সকল অধিকার সংরক্ষিত।</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
