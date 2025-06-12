"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))]

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 border border-white/20 shadow-lg inline-block">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              সব পণ্য
            </h1>
            <p className="text-gray-600">আমাদের সম্পূর্ণ প্রিমিয়াম পণ্যের সংগ্রহ দেখুন</p>
          </div>
        </div>

        {/* Update the filters section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="পণ্য খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 backdrop-blur-md bg-white/70 border border-white/20 shadow-lg"
            />
          </div>

          {/* Update Select components with glassy effect */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 backdrop-blur-md bg-white/70 border border-white/20 shadow-lg">
              <SelectValue placeholder="ক্যাটেগরি" />
            </SelectTrigger>
            <SelectContent className="backdrop-blur-md bg-white/90 border border-white/20">
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "সব ক্যাটেগরি" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48 backdrop-blur-md bg-white/70 border border-white/20 shadow-lg">
              <SelectValue placeholder="সাজান" />
            </SelectTrigger>
            <SelectContent className="backdrop-blur-md bg-white/90 border border-white/20">
              <SelectItem value="name">নাম</SelectItem>
              <SelectItem value="price-low">দাম: কম থেকে বেশি</SelectItem>
              <SelectItem value="price-high">দাম: বেশি থেকে কম</SelectItem>
              <SelectItem value="rating">রেটিং</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
