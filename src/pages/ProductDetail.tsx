
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, ArrowLeft, Plus, Minus, Leaf, Package, CheckCircle, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: "Monstera Deliciosa",
    price: 299,
    originalPrice: 399,
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
    ],
    category: "Indoor Plants",
    rating: 4.8,
    reviewCount: 247,
    discount: 25,
    inStock: true,
    stockCount: 15,
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a stunning tropical houseplant known for its large, glossy green leaves with natural holes and splits. This plant is perfect for adding a dramatic, jungle-like feel to any indoor space.",
    features: [
      "Easy to care for and perfect for beginners",
      "Excellent air purifier",
      "Fast-growing with dramatic foliage",
      "Thrives in bright, indirect light",
      "Pet-friendly (non-toxic)"
    ],
    careInstructions: {
      light: "Bright, indirect sunlight",
      water: "Water when top inch of soil is dry",
      humidity: "40-60% humidity preferred",
      temperature: "65-85°F (18-29°C)",
      fertilizer: "Monthly during growing season"
    },
    specifications: {
      "Plant Height": "12-18 inches",
      "Pot Size": "6 inch diameter",
      "Growth Rate": "Fast",
      "Origin": "Central America",
      "Botanical Name": "Monstera deliciosa"
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      price: 449,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=300&fit=crop",
      rating: 4.6
    },
    {
      id: 3,
      name: "Snake Plant",
      price: 199,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 4,
      name: "Peace Lily",
      price: 179,
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=300&h=300&fit=crop",
      rating: 4.7
    }
  ];

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} x ${product.name} to cart!`);
  };

  const handleBuyNow = () => {
    toast.success("Redirecting to checkout...");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Plants
          </Link>
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-green-600">Plants</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviewCount} reviews)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-green-600">₹{product.price}</span>
                <span className="text-2xl text-gray-500 line-through">₹{product.originalPrice}</span>
                <Badge className="bg-red-500 text-white">
                  {product.discount}% OFF
                </Badge>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-lg">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="border-t pt-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      className="px-3"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-green-600">
                  <Package className="h-5 w-5" />
                  <span className="font-medium">{product.stockCount} in stock</span>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow}
                  variant="outline" 
                  className="flex-1 border-green-600 text-green-600 hover:bg-green-50 py-4 text-lg"
                >
                  Buy Now
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  <span>Free delivery above ₹500</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>7-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="care" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="care" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Leaf className="h-6 w-6 mr-2 text-green-600" />
                    Plant Care Guide
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(product.careInstructions).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Leaf className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg capitalize mb-2">{key}</h4>
                          <p className="text-gray-600">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specs" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Product Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-medium text-gray-900">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Customer Reviews</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-lg font-medium">{product.rating}</span>
                      <span className="text-gray-600">({product.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Mock reviews */}
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="font-medium text-green-600">A</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Ananya Sharma</h4>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[1,2,3,4,5].map((i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">2 days ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Absolutely love this Monstera! It arrived in perfect condition and has been thriving in my living room. 
                        The leaves are beautiful and it's already showing new growth. Highly recommend!
                      </p>
                    </div>
                    
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="font-medium text-green-600">R</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Rahul Patel</h4>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[1,2,3,4].map((i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                              <Star className="h-4 w-4 text-gray-300" />
                            </div>
                            <span className="text-sm text-gray-600">1 week ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Great plant and excellent packaging. The only reason I'm giving 4 stars instead of 5 is that 
                        it took a bit longer to deliver than expected. But overall very satisfied with the quality!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button 
                      size="sm" 
                      className="absolute top-4 right-4 bg-white/90 text-gray-700 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i <= Math.floor(relatedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({relatedProduct.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">₹{relatedProduct.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
