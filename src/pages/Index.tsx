
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Leaf, Star, ArrowRight, Package, CheckCircle, Users, Gift } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { categories, plants, comboPacks } from "@/data/plants";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Updated featuredPlants with correct images from plants.ts data
  const featuredPlants = [
    {
      id: 1,
      name: "Ficus (All Types)",
      price: 299,
      originalPrice: 399,
      image: plants.find(p => p.name === "Ficus (All Types)")?.image || "https://images.unsplash.com/photo-1680677246220-1b9aa4a7408a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Indoor Plants",
      rating: 4.8,
      discount: 25
    },
    {
      id: 2,
      name: "Areca Palm",
      price: 449,
      originalPrice: 549,
      image: plants.find(p => p.name === "Areca Palm")?.image || "https://images.unsplash.com/photo-1680677246220-1b9aa4a7408a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Indoor Plants",
      rating: 4.6,
      discount: 18
    },
    {
      id: 3,
      name: "Snake Plant",
      price: 199,
      originalPrice: 249,
      image: plants.find(p => p.name === "Snake Plant")?.image || "https://images.unsplash.com/photo-1680677246220-1b9aa4a7408a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Flowering & Seasonal Plants",
      rating: 4.9,
      discount: 20
    },
    {
      id: 4,
      name: "Crotons (Duck Foot, Gold Dust)",
      price: 179,
      originalPrice: 219,
      image: plants.find(p => p.name === "Crotons (Duck Foot, Gold Dust)")?.image || "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
      category: "Flowering Plants",
      rating: 4.7,
      discount: 18
    }
  ];

  // Updated categoryData with images from plants.ts data
  const categoryData = [
    { 
      name: "Foliage & Decorative Plants", 
      count: plants.filter(p => p.category === "Foliage & Decorative Plants").length,
      image: plants.find(p => p.category === "Foliage & Decorative Plants")?.image || "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=300&fit=crop"
    },
    { 
      name: "Flowering & Seasonal Plants", 
      count: plants.filter(p => p.category === "Flowering & Seasonal Plants").length,
      image: plants.find(p => p.category === "Flowering & Seasonal Plants")?.image || "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=300&h=300&fit=crop"
    },
    { 
      name: "Air-Purifying Plants", 
      count: plants.filter(p => p.category === "Air-Purifying Plants").length,
      image: plants.find(p => p.category === "Air-Purifying Plants")?.image || "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop"
    },
    { 
      name: "Combo Packs", 
      count: 4,
      image: "https://images.unsplash.com/photo-1680677246220-1b9aa4a7408a?w=300&h=300&fit=crop"
    }
  ];

  const stats = [
    { icon: <Package className="h-8 w-8" />, number: "10,000+", label: "Plants Available" },
    { icon: <Users className="h-8 w-8" />, number: "50,000+", label: "Happy Customers" },
    { icon: <CheckCircle className="h-8 w-8" />, number: "99%", label: "Delivery Success" },
    { icon: <Star className="h-8 w-8" />, number: "4.8", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
                  <Leaf className="h-4 w-4 mr-2" />
                  Premium Quality Plants
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="inline-block animate-in slide-in-from-left duration-700">Bring Nature</span>
                  <span className="text-green-600 block animate-in slide-in-from-right duration-700 delay-300">Home Today</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover our premium collection of indoor and outdoor plants. 
                  From exotic houseplants to beautiful garden varieties, we have everything to make your space green and vibrant.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-500">
                <Link to="/products">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Shop Plants Now
                    <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                  </Button>
                </Link>
                <Link to="/plant-care">
                  <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                    Plant Care Guide
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4 animate-in fade-in duration-1000 delay-700">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-green-200 border-2 border-white flex items-center justify-center animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">50,000+ Happy Customers</p>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-in zoom-in duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">(4.8 rating)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={plants.find(p => p.name === "Ficus (All Types)")?.image || "https://unsplash.com/photos/a-group-of-potted-plants-sitting-next-to-each-other-3rla9s3dZy8?w=300&h=400&fit=crop"} 
                  alt="Beautiful plants"
                  className="rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300 animate-in zoom-in duration-700"
                />
                <img 
                  src={plants.find(p => p.name === "Areca Palm")?.image || "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=400&fit=crop"} 
                  alt="Indoor plants"
                  className="rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8 animate-in zoom-in duration-700 delay-300"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">1,200+ Plants in Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Plant Animation Section */}
      <section className="py-12 px-4 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-700 animate-pulse">
              <span className="inline-block animate-bounce-slow">🌱</span> Watch Your Garden Grow <span className="inline-block animate-bounce-slow delay-300">🌿</span>
            </h2>
            
            <div className="relative w-full h-64 bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl shadow-xl overflow-hidden">
              {/* Sun */}
              <div className="absolute top-6 right-12 w-16 h-16 bg-yellow-300 rounded-full animate-pulse shadow-lg z-10">
                <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-75"></div>
              </div>
              
              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-amber-800 rounded-b-2xl">
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-amber-700 to-amber-900"></div>
              </div>
              
              {/* Plants growing */}
              <div className="absolute bottom-24 left-1/4 transform -translate-x-1/2">
                <div className="w-1 h-0 bg-green-600 animate-grow-height origin-bottom"></div>
                <div className="absolute -top-4 -left-4 w-8 h-8 opacity-0 animate-leaf-appear delay-1000">
                  <div className="w-8 h-8 bg-green-500 rounded-full transform rotate-45 scale-75"></div>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-0 bg-green-600 animate-grow-height-delay origin-bottom"></div>
                <div className="absolute -top-6 -left-6 w-12 h-12 opacity-0 animate-leaf-appear delay-1500">
                  <div className="w-12 h-12 bg-green-400 rounded-full transform rotate-45 scale-75"></div>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-3/4 transform -translate-x-1/2">
                <div className="w-1 h-0 bg-green-600 animate-grow-height-delay-more origin-bottom"></div>
                <div className="absolute -top-5 -left-5 w-10 h-10 opacity-0 animate-leaf-appear delay-2000">
                  <div className="w-10 h-10 bg-green-500 rounded-full transform rotate-45 scale-75"></div>
                </div>
              </div>
              
              {/* Water drops */}
              <div className="absolute top-12 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-0 animate-water-drop"></div>
              <div className="absolute top-12 left-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-0 animate-water-drop delay-500"></div>
              <div className="absolute top-12 left-3/4 w-2 h-2 bg-blue-400 rounded-full opacity-0 animate-water-drop delay-1000"></div>
              
              {/* Floating text */}
              <div className="absolute top-8 left-8 text-lg font-semibold text-green-800 opacity-0 animate-float-text">
                Nurture
              </div>
              <div className="absolute top-16 left-1/3 text-lg font-semibold text-green-800 opacity-0 animate-float-text delay-700">
                Grow
              </div>
              <div className="absolute top-8 left-2/3 text-lg font-semibold text-green-800 opacity-0 animate-float-text delay-1400">
                Thrive
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/products">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Our Collection
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect plants for your space</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryData.map((category, index) => (
              <Link key={index} to="/products" className="group animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 hover:border-green-200 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 text-4xl group-hover:scale-125 transition-transform duration-300">
                      
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {category.count} items available
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Plants</h2>
            <p className="text-xl text-gray-600">Handpicked favorites from our collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPlants.map((plant, index) => (
              <Link key={plant.id} to={`/product/${plant.id}`} className="group animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                  <div className="relative">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white animate-pulse">
                      {plant.discount}% OFF
                    </Badge>
                    <Button 
                      size="sm" 
                      className="absolute top-4 right-4 bg-white/90 text-gray-700 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {plant.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {plant.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i <= Math.floor(plant.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} transition-colors duration-300`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({plant.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">₹{plant.price}</span>
                        <span className="text-lg text-gray-500 line-through">₹{plant.originalPrice}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-in fade-in duration-1000 delay-500">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Plants
                <ArrowRight className="ml-2 h-5 w-5 group-hover:animate-bounce-x" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Combo Packs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Combo Packs</h2>
            <p className="text-xl text-gray-600">Curated collections for every space and occasion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comboPacks.filter(pack => [
              "Festival Floral Set", 
              "Balcony Starter Kit", 
              "Gifting Pack (Small)", 
              "Cactus & Succulent Collection"
            ].includes(pack.name)).map((pack, index) => (
              <Link key={pack.id} to={`/combo-pack/${pack.id}`} className="group animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-2 border-transparent hover:border-green-200">
                  <div className="relative">
                    <img 
                      src={pack.image} 
                      alt={pack.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-purple-500 text-white">
                      COMBO
                    </Badge>
                    <Badge className="absolute top-12 left-4 bg-red-500 text-white animate-pulse">
                      SAVE ₹{pack.originalPrice - pack.price}
                    </Badge>
                    <Button 
                      size="sm" 
                      className="absolute top-4 right-4 bg-white/90 text-gray-700 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {pack.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {pack.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {pack.plants.map((plant, i) => (
                        <Badge key={i} variant="outline" className="bg-green-50">
                          {plant}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">₹{pack.price}</span>
                        <span className="text-lg text-gray-500 line-through">₹{pack.originalPrice}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-in fade-in duration-1000 delay-500">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Combo Packs
                <Gift className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white transform hover:scale-110 transition-all duration-300">
                <div className="flex justify-center mb-4 text-green-200 animate-pulse">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Devakusuma?</h2>
            <p className="text-xl text-gray-600">Your trusted partner in creating green spaces</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 transform hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Hand-selected, healthy plants from certified growers with quality guarantee.</p>
            </div>
            
            <div className="text-center p-8 transform hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Safe Delivery</h3>
              <p className="text-gray-600">Secure packaging and fast delivery to ensure your plants arrive in perfect condition.</p>
            </div>
            
            <div className="text-center p-8 transform hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 transition-colors duration-300">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-gray-600">24/7 plant care support and guidance from our team of gardening experts.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
