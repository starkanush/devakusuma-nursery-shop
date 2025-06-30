
import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Devakusuma</h3>
                <p className="text-sm text-gray-400">Nursery Garden</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in creating beautiful green spaces. We provide premium quality plants 
              and expert gardening advice to help you build your dream garden.
            </p>
            <div className="flex items-center space-x-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-400 ml-2">4.8/5 from 50,000+ customers</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Venkayamma Peta Road<br />
                    Rajamahendravaram<br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:8870751384" className="block text-gray-300 hover:text-white transition-colors text-sm">
                    8870751384
                  </a>
                  <a href="tel:8074525253" className="block text-gray-300 hover:text-white transition-colors text-sm">
                    8074525253
                  </a>
                  <a href="tel:9133229522" className="block text-gray-300 hover:text-white transition-colors text-sm">
                    9133229522
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Open daily: 5:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                  Shop Plants
                </Link>
              </li>
              <li>
                <Link to="/plant-care" className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                  Plant Care Guide
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            <p className="text-gray-400 text-sm">
              Get plant care tips, new arrivals, and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-500 text-sm"
                />
                <Button className="bg-green-600 hover:bg-green-700 rounded-l-none px-4">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-3 text-white">Follow Us</h5>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:border-green-500 hover:bg-green-500/10 text-xs px-3">
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:border-green-500 hover:bg-green-500/10 text-xs px-3">
                  Instagram
                </Button>
                <Button size="sm" variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:border-green-500 hover:bg-green-500/10 text-xs px-3">
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2024 Devakusuma Nursery Garden. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors hover:underline">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
