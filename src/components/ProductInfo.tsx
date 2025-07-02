
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, Package, Truck, CheckCircle, ShoppingCart, Star } from "lucide-react";
import SizeSelector from "@/components/SizeSelector";
import { Plant, PlantSize } from "@/data/plants";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface ProductInfoProps {
  product: Plant;
  images: string[];
}

const ProductInfo = ({ product, images }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<PlantSize | null>(
    product.sizes.length > 0 ? product.sizes[0] : null
  );
  const { addToCart } = useCart();
  const { user } = useAuth();

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
  );
};

export default ProductInfo;
