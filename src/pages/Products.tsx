
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, ShoppingCart, Star, Filter, Grid, List } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
      category: "Indoor Plants",
      rating: 4.8,
      discount: 25,
      inStock: true,
      description: "Beautiful swiss cheese plant perfect for indoor spaces"
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      price: 449,
      originalPrice: 549,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      category: "Indoor Plants",
      rating: 4.6,
      discount: 18,
      inStock: true,
      description: "Statement plant with large, glossy leaves"
    },
    {
      id: 3,
      name: "Snake Plant",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      category: "Low Maintenance",
      rating: 4.9,
      discount: 20,
      inStock: true,
      description: "Hardy plant that thrives in low light conditions"
    },
    {
      id: 4,
      name: "Peace Lily",
      price: 179,
      originalPrice: 219,
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=400&fit=crop",
      category: "Flowering Plants",
      rating: 4.7,
      discount: 18,
      inStock: false,
      description: "Elegant flowering plant that purifies air"
    },
    {
      id: 5,
      name: "Rubber Plant",
      price: 259,
      originalPrice: 309,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
      category: "Indoor Plants",
      rating: 4.5,
      discount: 16,
      inStock: true,
      description: "Glossy-leaved plant that's easy to care for"
    },
    {
      id: 6,
      name: "Aloe Vera",
      price: 129,
      originalPrice: 159,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
      category: "Succulents",
      rating: 4.8,
      discount: 19,
      inStock: true,
      description: "Healing plant with medicinal properties"
    }
  ];

  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Flowering Plants",
    "Succulents",
    "Low Maintenance",
    "Air Purifying"
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Plant Collection</h1>
          <p className="text-xl text-gray-600">Discover premium plants for your home and garden</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex bg-white border border-gray-300 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="px-3"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="px-3"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  min={0}
                  step={10}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      />
                      <label htmlFor={category} className="text-sm text-gray-700 cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    viewMode === "list" ? "flex" : ""
                  }`}>
                    <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          viewMode === "list" ? "w-full h-48" : "w-full h-64"
                        }`}
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                          {product.discount}% OFF
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                      <Button 
                        size="sm" 
                        className="absolute top-4 right-4 bg-white/90 text-gray-700 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      {viewMode === "list" && (
                        <p className="text-gray-600 mb-3">{product.description}</p>
                      )}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex">
                          {[1,2,3,4,5].map((i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.rating})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                          )}
                        </div>
                        {viewMode === "list" && (
                          <Button 
                            className="bg-green-600 hover:bg-green-700"
                            disabled={!product.inStock}
                          >
                            Add to Cart
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No products found matching your criteria</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setPriceRange([0, 1000]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
