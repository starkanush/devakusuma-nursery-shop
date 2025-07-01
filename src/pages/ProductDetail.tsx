import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, ArrowLeft, Plus, Minus, Leaf, Package, CheckCircle, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SizeSelector from "@/components/SizeSelector";
import { toast } from "sonner";
import { plants, PlantSize } from "@/data/plants";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/hooks/useAuth";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<PlantSize | null>(null);
  const { addToCart } = useCart();
  const { user } = useAuth();

  const product = plants.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products" className="text-green-600 hover:text-green-700">
            ← Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Set default size if not selected
  if (!selectedSize && product.sizes.length > 0) {
    setSelectedSize(product.sizes[0]);
  }

  // Updated images based on product name with plant-specific URLs
  const getProductImages = (productName: string) => {
    const imageMap: { [key: string]: string[] } = {
      "Ficus (All Types)": [
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1612363148951-8b0e3831e90c?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&h=600&fit=crop"
      ],
      "Areca Palm": [
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop"
      ],
      "Crotons (Duck Foot, Gold Dust)": [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
      ],
      "Thuja / Morpankhi": [
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop"
      ],
      "Cordyline": [
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ],
      "Dracaena Marginata": [
        "https://images.unsplash.com/photo-1583606663585-39573b6e0a13?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1587897689715-9eae8b81b68f?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ],
      "Cycads": [
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1604603662088-3beeacabb8ad?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop"
      ],
      "Snake Plant": [
        "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&h=600&fit=crop"
      ],
      "ZZ Plant": [
        "https://images.unsplash.com/photo-1586084715209-8d10e8e1c2b5?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1463320898675-b6740e668b25?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ],
      "Jade Plant": [
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ],
      "Spider Plant": [
        "https://images.unsplash.com/photo-1565011523534-747a8601de95?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ],
      "Ferns": [
        "https://images.unsplash.com/photo-1585316829082-2a1dc8854e4e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
      ],
      "Bougainvillea": [
        "https://images.unsplash.com/photo-1598979997959-7750c5aa2378?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop"
      ],
      "Hibiscus": [
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop"
      ],
      "Marigold (Seasonal)": [
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1601997357747-5394b3e6fb6c?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop"
      ],
      "Chrysanthemum": [
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1601997357747-5394b3e6fb6c?w=600&h=600&fit=crop"
      ],
      "Hybrid Roses": [
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
      ],
      "Plumeria (Frangipani)": [
        "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
      ],
      "Money Plant (Outdoor)": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586771711050-1182295b5e6f?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ]
    };
    
    return imageMap[productName] || [
      product.image,
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
    ];
  };

  const images = getProductImages(product.name);
  const relatedProducts = plants.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please sign in to add items to cart");
      return;
    }

    if (!selectedSize) {
      toast.error("Please select a size first!");
      return;
    }

    await addToCart({
      plant_id: product.id,
      plant_name: product.name,
      plant_image: images[0],
      price: selectedSize.price,
      original_price: selectedSize.price,
      size: selectedSize.name,
      quantity: quantity
    });
  };

  const currentPrice = selectedSize?.price || product.sizes[0]?.price || 0;

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
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {images.map((image, index) => (
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
                <span className="text-gray-600">({product.rating} rating)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-green-600">₹{currentPrice}</span>
                <Badge className={`${
                  product.careLevel === 'Easy' ? 'bg-green-100 text-green-700' :
                  product.careLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {product.careLevel} Care
                </Badge>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="border-t pt-6">
              <SizeSelector 
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSizeSelect={setSelectedSize}
              />
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
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-green-600">
                  <Package className="h-5 w-5" />
                  <span className="font-medium">In Stock</span>
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

        {/* Plant Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="care" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
              <TabsTrigger value="specs">Plant Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="care" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Leaf className="h-6 w-6 mr-2 text-green-600" />
                    Plant Care Guide
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Light Requirements</h4>
                        <p className="text-gray-600">
                          {product.careLevel === 'Easy' ? 'Bright, indirect light or partial shade' :
                           product.careLevel === 'Medium' ? 'Bright, indirect light preferred' :
                           'Bright light with some direct morning sun'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Watering</h4>
                        <p className="text-gray-600">
                          {product.careLevel === 'Easy' ? 'Water when top inch of soil is dry' :
                           product.careLevel === 'Medium' ? 'Regular watering, keep soil slightly moist' :
                           'Careful watering schedule, avoid overwatering'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specs" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Plant Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Category:</span>
                      <span className="text-gray-600">{product.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Care Level:</span>
                      <span className="text-gray-600">{product.careLevel}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Available Sizes:</span>
                      <span className="text-gray-600">{product.sizes.length} options</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Stock Status:</span>
                      <span className="text-green-600">In Stock</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Plants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative">
                      <img 
                        src={getProductImages(relatedProduct.name)[0]} 
                        alt={relatedProduct.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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
                        <span className="text-xl font-bold text-green-600">
                          From ₹{Math.min(...relatedProduct.sizes.map(size => size.price))}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
