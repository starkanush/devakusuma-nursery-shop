import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Star, Package, ShoppingCart, Truck, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { plants, comboPacks } from "@/data/plants";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ComboPackDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { user } = useAuth();

  const comboPack = comboPacks.find(p => p.id === parseInt(id || "0"));

  if (!comboPack) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Combo Pack not found</h1>
          <Link to="/products" className="text-green-600 hover:text-green-700">
            ← Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get the plant details for each plant in the combo pack
  const comboPlantDetails = comboPack.plants.map(plantName => {
    return plants.find(p => p.name.includes(plantName)) || null;
  }).filter(p => p !== null);

  // Get combo pack images
  const getComboImages = (comboPack: any) => {
    // If the combo pack has an images array, use it
    if (comboPack.images && comboPack.images.length > 0) {
      return comboPack.images;
    }
    
    // Fallback to default images if no images array is found
    return [
      comboPack.image,
      comboPlantDetails[0]?.image || "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
      comboPlantDetails[1]?.image || "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
    ];
  };

  const images = getComboImages(comboPack);
  const relatedCombos = comboPacks.filter(p => p.id !== comboPack.id).slice(0, 3);

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please sign in to add items to cart");
      return;
    }

    await addToCart({
      plant_id: comboPack.id,
      plant_name: comboPack.name,
      plant_image: images[0],
      price: comboPack.price,
      original_price: comboPack.originalPrice,
      size: "Combo Pack",
      quantity: quantity
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-green-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{comboPack.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img 
                src={images[0]} 
                alt={comboPack.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200"
                >
                  <img 
                    src={image} 
                    alt={`${comboPack.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-amber-100 text-amber-800 mb-4">
                Combo Pack
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{comboPack.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-green-600">₹{comboPack.price}</span>
                <span className="text-lg text-gray-500 line-through">₹{comboPack.originalPrice}</span>
                <Badge className="bg-red-100 text-red-700">
                  {Math.round(((comboPack.originalPrice - comboPack.price) / comboPack.originalPrice) * 100)}% OFF
                </Badge>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {comboPack.description}
              </p>
            </div>

            {/* Plants Included */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Plants Included:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comboPlantDetails.map((plant, index) => (
                  plant && (
                    <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex items-center p-4">
                        <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                          <img 
                            src={plant.image} 
                            alt={plant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{plant.name}</h4>
                          <p className="text-sm text-gray-600">{plant.careLevel} Care</p>
                        </div>
                      </div>
                    </Card>
                  )
                ))}
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
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart - ₹{comboPack.price * quantity}
              </Button>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Truck className="h-5 w-5 text-green-600" />
                  <span>Free shipping available</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>In stock & ready to ship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Combo Packs */}
        <div className="border-t pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCombos.map((combo) => (
              <Link key={combo.id} to={`/combo-pack/${combo.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={combo.image} 
                      alt={combo.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-amber-100 text-amber-800">Combo Pack</Badge>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {combo.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-green-600">₹{combo.price}</span>
                        <span className="text-sm text-gray-500 line-through">₹{combo.originalPrice}</span>
                      </div>
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

export default ComboPackDetail;