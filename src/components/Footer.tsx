
import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918074525253", "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-xl font-bold">Devakusuma</h3>
                <p className="text-sm text-gray-400">Nursery Garden</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in creating beautiful green spaces. We provide premium quality plants and expert gardening solutions for over a decade.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transform hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Plants
                </Link>
              </li>
              <li>
                <Link to="/plant-care" className="text-gray-400 hover:text-white transition-colors">
                  Plant Care
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Plant Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Plant Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Indoor Plants
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Outdoor Plants
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Flowering Plants
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Air Purifying
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Low Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Venkayamma Peta Road<br />
                    Rajamahendravaram<br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:8074525253" className="text-gray-400 hover:text-white transition-colors block">
                    8074525253
                  </a>
                  <a href="tel:9133229522" className="text-gray-400 hover:text-white transition-colors block">
                    9133229522
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <a 
                  href="mailto:info@devakusuma.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@devakusuma.com
                </a>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-2">Business Hours:</p>
                <p className="text-green-400 font-medium">Open Daily: 5:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Devakusuma Nursery Garden. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
