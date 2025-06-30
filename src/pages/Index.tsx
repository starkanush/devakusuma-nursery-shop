
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Leaf, Star, ArrowRight, Package, CheckCircle, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPlants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
      category: "Indoor Plants",
      rating: 4.8,
      discount: 25
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      price: 449,
      originalPrice: 549,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      category: "Indoor Plants",
      rating: 4.6,
      discount: 18
    },
    {
      id: 3,
      name: "Snake Plant",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      category: "Low Maintenance",
      rating: 4.9,
      discount: 20
    },
    {
      id: 4,
      name: "Peace Lily",
      price: 179,
      originalPrice: 219,
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=400&fit=crop",
      category: "Flowering Plants",
      rating: 4.7,
      discount: 18
    }
  ];

  const categories = [
    { name: "Indoor Plants", icon: "🏠", count: 150 },
    { name: "Outdoor Plants", icon: "🌳", count: 200 },
    { name: "Flowering Plants", icon: "🌸", count: 80 },
    { name: "Succulents", icon: "🌵", count: 60 },
    { name: "Herbs & Vegetables", icon: "🌿", count: 45 },
    { name: "Seeds", icon: "🌱", count: 120 }
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
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  <Leaf className="h-4 w-4 mr-2" />
                  Premium Quality Plants
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Bring Nature
                  <span className="text-green-600 block">Home Today</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover our premium collection of indoor and outdoor plants. 
                  From exotic houseplants to beautiful garden varieties, we have everything to make your space green and vibrant.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  Shop Plants Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                  Plant Care Guide
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-green-200 border-2 border-white flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">50,000+ Happy Customers</p>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">(4.8 rating)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=400&fit=crop" 
                  alt="Beautiful plants"
                  className="rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=400&fit=crop" 
                  alt="Indoor plants"
                  className="rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">1,200+ Plants in Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search for plants, seeds, or garden supplies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-green-500 focus:outline-none shadow-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 rounded-full px-8">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect plants for your space</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/products" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-green-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">{category.count} items</p>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Plants</h2>
            <p className="text-xl text-gray-600">Handpicked favorites from our collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPlants.map((plant) => (
              <Link key={plant.id} to={`/product/${plant.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                      {plant.discount}% OFF
                    </Badge>
                    <Button 
                      size="sm" 
                      className="absolute top-4 right-4 bg-white/90 text-gray-700 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {plant.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i <= Math.floor(plant.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
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
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8">
                View All Plants
                <ArrowRight className="ml-2 h-5 w-5" />
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
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4 text-green-200">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Devakusuma?</h2>
            <p className="text-xl text-gray-600">Your trusted partner in creating green spaces</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Hand-selected, healthy plants from certified growers with quality guarantee.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Safe Delivery</h3>
              <p className="text-gray-600">Secure packaging and fast delivery to ensure your plants arrive in perfect condition.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
