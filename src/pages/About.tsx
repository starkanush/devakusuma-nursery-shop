
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Leaf, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Devakusuma Nursery Garden</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where every leaf tells a story of care, growth, and green living.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Located in the heart of Kadiyam's legendary nursery belt near Rajamahendravaram, 
                    Andhra Pradesh, Devakusuma Nursery Garden spans over <strong>10 acres of vibrant greenery</strong>.
                  </p>
                  <p>
                    For years, we've specialized in cultivating a wide range of outdoor, decorative, 
                    and landscape-ready plants — from iconic Ficus and Areca Palms to bright Bougainvillea, 
                    Crotons, Cycads, Hibiscus, and more.
                  </p>
                  <p>
                    We proudly serve plant lovers, landscapers, decorators, resorts, and institutions — 
                    and now, we've made it even easier to shop with us through our digital catalog and WhatsApp ordering.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  At Devakusuma, we see every plant as more than just a product — it's a living expression 
                  of positivity, calm, and natural beauty. Whether you're decorating your balcony or designing 
                  an entire landscape, we're here to guide you with plant recommendations, sizing, and care advice.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Visit Us</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Devakusuma Nursery Garden</p>
                      <p className="text-gray-600">Venkayamma Peta Road</p>
                      <p className="text-gray-600">Rajamahendravaram, Andhra Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Open every day</p>
                      <p className="text-gray-600">5:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Online orders & inquiries</p>
                      <p className="text-gray-600">via WhatsApp & our online catalog</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Over 10 acres of premium plant varieties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Located in Kadiyam's famous nursery belt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Expert guidance on plant care and selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Convenient online ordering via WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span>Serving individuals, institutions, and businesses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Green Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore. Order. Grow with us. 🌿
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Browse Our Plants
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
