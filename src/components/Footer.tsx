
import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail, MessageCircle, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-amber-400 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-500 cursor-not-allowed">Indoor Plants</span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Outdoor Plants</span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Succulents</span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">Accessories</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center gap-2">
                <MapPin size={16} /> 
                <a href="https://maps.google.com/?q=Venkayamma+Peta+Road+Rajamahendravaram+Andhra+Pradesh" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Devakusuma Nursery Garden<br />
                  Venkayamma Peta Road<br />
                  Rajamahendravaram, Andhra Pradesh
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <Phone size={16} /> 
                <a href="tel:+918074525253" className="hover:text-amber-400 transition-colors">
                  +91 8074525253
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <Mail size={16} /> 
                <a href="mailto:hello@devakusuma.com" className="hover:text-amber-400 transition-colors">
                  hello@devakusuma.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Follow us on Instagram for updates and special offers.</p>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.instagram.com/dng_plants?igsh=MWxoeWFid2R4ZXJvZg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <button className="bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full p-2 transition-colors hover:from-amber-600 hover:to-pink-600">
                  <Instagram size={18} />
                </button>
                <span className="text-gray-400 group-hover:text-amber-400 transition-colors">Follow us on Instagram</span>
              </a>
            </div>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://wa.me/918074525253" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-colors">
                  <MessageCircle size={18} />
                </button>
                <span className="text-gray-400 group-hover:text-green-400 transition-colors">Chat with us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Deva Kusuma Nursery. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-amber-400 transition-colors">Terms of Service</Link>
            <Link to="/shipping-policy" className="text-gray-500 hover:text-amber-400 transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
