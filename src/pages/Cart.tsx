
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, Package, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrderSplashScreen from "@/components/OrderSplashScreen";
import { toast } from "sonner";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Monstera Deliciosa",
      size: "Medium",
      price: 140,
      originalPrice: 185,
      image: "https://images.unsplash.com/photo-1587897689715-9eae8b81b68f?w=300&h=300&fit=crop",
      quantity: 2,
      inStock: true
    },
    {
      id: 2,
      name: "Snake Plant",
      size: "Sapling",
      price: 25,
      originalPrice: 35,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop",
      quantity: 1,
      inStock: true
    },
    {
      id: 3,
      name: "ZZ Plant",
      size: "Basic",
      price: 275,
      originalPrice: 320,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
      quantity: 1,
      inStock: false
    }
  ]);

  const [showSplashScreen, setShowSplashScreen] = useState(false);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    toast.success("Cart updated!");
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success("Item removed from cart!");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const savings = originalTotal - subtotal;
  const deliveryFee = subtotal >= 500 ? 0 : 50;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    setShowSplashScreen(true);
  };

  const handleSplashComplete = () => {
    setShowSplashScreen(false);
    
    // Compile order details
    const orderDetails = {
      items: cartItems.filter(item => item.inStock),
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
      orderDate: new Date().toLocaleDateString()
    };

    // Create WhatsApp message
    let message = `🌱 *New Order from Devakusuma Nursery*\n\n`;
    message += `📅 Order Date: ${orderDetails.orderDate}\n\n`;
    message += `🛒 *Order Items:*\n`;
    
    orderDetails.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.size})\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₹${item.price} each\n`;
      message += `   Total: ₹${item.price * item.quantity}\n\n`;
    });

    message += `💰 *Order Summary:*\n`;
    message += `Subtotal: ₹${orderDetails.subtotal}\n`;
    message += `Delivery: ${orderDetails.deliveryFee === 0 ? 'FREE' : `₹${orderDetails.deliveryFee}`}\n`;
    message += `*Total Amount: ₹${orderDetails.total}*\n\n`;
    message += `📞 Contact Numbers:\n`;
    message += `• 8074525253\n`;
    message += `• 9133229522\n\n`;
    message += `Please confirm this order and provide delivery details. Thank you! 🙏`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918074525253?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success("Order details sent to WhatsApp!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Looks like you haven't added any plants to your cart yet.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <OrderSplashScreen 
        isVisible={showSplashScreen} 
        onComplete={handleSplashComplete} 
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-green-600 hover:text-green-700 mb-4 transform hover:scale-105 transition-all duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <Badge variant="destructive" className="text-xs">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-1">Size: {item.size}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-green-600">₹{item.price}</span>
                            <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 transform hover:scale-110 transition-all duration-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 hover:bg-green-50"
                            disabled={!item.inStock}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 hover:bg-green-50"
                            disabled={!item.inStock}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            ₹{item.price * item.quantity}
                          </div>
                          {item.originalPrice > item.price && (
                            <div className="text-sm text-gray-500">
                              Save ₹{(item.originalPrice - item.price) * item.quantity}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {!item.inStock && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-sm text-red-800">
                            This item is currently out of stock. Remove it from your cart or check back later.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Total Savings</span>
                      <span className="font-medium">-₹{savings}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handlePlaceOrder}
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  disabled={cartItems.some(item => !item.inStock)}
                >
                  Place Order
                </Button>
                
                {deliveryFee > 0 && (
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    Add ₹{500 - subtotal} more to get FREE delivery!
                  </p>
                )}
              </CardContent>
            </Card>
            
            {/* Delivery Info */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-green-600" />
                  Delivery Information
                </h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <Package className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Standard delivery in 3-5 business days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Package className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Secure packaging to ensure plant safety</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Package className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Free delivery on orders above ₹500</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <p className="font-medium text-gray-900 mb-2">Contact Numbers:</p>
                    <div className="space-y-1">
                      <p>📞 8074525253</p>
                      <p>📞 9133229522</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
