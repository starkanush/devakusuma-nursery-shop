
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Menu, X, User, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(0); // Start with empty cart
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Successfully signed out");
      navigate("/");
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/825072ee-9557-4ff3-8edd-6e933304f68a.png" 
              alt="Devakusuma Nursery Garden" 
              className="h-12 w-auto"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden">
              <h1 className="text-xl font-bold text-green-700">Devakusuma</h1>
              <p className="text-xs text-gray-600">Nursery Garden</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Plants
            </Link>
            <Link to="/plant-care" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Plant Care
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {user ? (
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}

            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Plants
            </Link>
            <Link 
              to="/plant-care" 
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Plant Care
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t">
              {user ? (
                <Button 
                  onClick={handleSignOut}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <User className="h-4 w-4 mr-2" />
                    Sign In / Sign Up
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
