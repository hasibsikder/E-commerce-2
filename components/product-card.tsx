"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"
import { useCart } from "@/contexts/cart-context"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <Card className="group overflow-hidden backdrop-blur-md bg-white/70 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/80 hover:scale-105">
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-110"
          />
        </Link>
        {!product.inStock && (
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 backdrop-blur-md bg-red-500/80 text-white border border-white/20"
          >
            স্টক নেই
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <CardContent className="p-4 backdrop-blur-sm">
        <div className="space-y-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
          </Link>

          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ৳{product.price}
            </span>
            <Badge variant="outline" className="backdrop-blur-sm bg-white/50 border-white/30">
              {product.category}
            </Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className="w-full backdrop-blur-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border border-white/20 shadow-lg disabled:from-gray-400 disabled:to-gray-500"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? "কার্টে যোগ করুন" : "স্টক নেই"}
        </Button>
      </CardFooter>
    </Card>
  )
}
