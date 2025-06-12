import Link from "next/link"
import { ArrowRight, Shield, Truck, HeadphonesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with glassy effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-sm" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        </div>

        <div className="relative py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                 হাসিব বাবার দরবার
                </h1>
                <p className="text-xl mb-8 text-white/90">রাফির রস টপ টপ কিনতে হলে আজই আসুন আমাদের দোকানে </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white shadow-lg"
                    asChild
                  >
                    <Link href="/products">
                      এখনই কিনুন <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/20 backdrop-blur-md bg-white/10"
                  >
                    আরও জানুন
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="backdrop-blur-md bg-white/60 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/70">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">ফ্রি ডেলিভারি</h3>
                <p className="text-gray-600">৫০ টাকার উপরে অর্ডারে ফ্রি ডেলিভারি</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/60 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/70">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">নিরাপদ পেমেন্ট</h3>
                <p className="text-gray-600">আপনার পেমেন্ট তথ্য সম্পূর্ণ নিরাপদ</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/60 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/70">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <HeadphonesIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">২৪/৭ সাপোর্ট</h3>
                <p className="text-gray-600">যেকোনো সময় সাহায্য পান</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="backdrop-blur-md bg-white/40 rounded-2xl p-6 border border-white/20 shadow-lg inline-block">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                বিশেষ পণ্যসমূহ
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                আমাদের হাতে বাছাই করা প্রিমিয়াম পণ্যের সংগ্রহ যা গ্রাহকরা সবচেয়ে বেশি পছন্দ করেন
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="backdrop-blur-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border border-white/20 shadow-lg"
              asChild
            >
              <Link href="/products">
                সব পণ্য দেখুন <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/60 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                আপডেট পান
              </h2>
              <p className="text-gray-600 mb-8">আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং নতুন পণ্য ও বিশেষ অফার সম্পর্কে প্রথম জানুন</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল দিন"
                  className="flex-1 px-4 py-2 border border-white/30 rounded-md backdrop-blur-md bg-white/50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 backdrop-blur-md border border-white/20">
                  সাবস্ক্রাইব
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
