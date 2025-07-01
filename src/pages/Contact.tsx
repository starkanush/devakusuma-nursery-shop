
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, MessageCircle, Mail, Navigation2 } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918074525253", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for plant inquiries, orders, or visit our nursery. 
            We're here to help you create your perfect green space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-green-600" />
                  Visit Our Nursery
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Devakusuma Nursery Garden<br />
                      Venkayamma Peta Road<br />
                      Rajamahendravaram, Andhra Pradesh
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                      <p className="text-gray-600">Open every day: 5:00 AM – 7:00 PM</p>
                    </div>
                  </div>

                  <Button 
                    onClick={() => window.open("https://maps.google.com/?q=Rajamahendravaram+Andhra+Pradesh", "_blank")}
                    className="mt-4 bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <Navigation2 className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Phone className="h-6 w-6 text-green-600" />
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                      <h3 className="font-semibold text-gray-900">WhatsApp Orders</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Place orders, get plant care advice, and inquire about availability directly through WhatsApp.
                    </p>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700 w-full transform hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                    </div>
                    <div className="space-y-2">
                      <a href="tel:8074525253" className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        📞 8074525253
                      </a>
                      <a href="tel:9133229522" className="block text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        📞 9133229522
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="h-6 w-6 text-green-600" />
                      <h3 className="font-semibold text-gray-900">Email Inquiries</h3>
                    </div>
                    <p className="text-gray-600 mb-2">
                      For detailed plant catalogs, bulk orders, or partnership inquiries.
                    </p>
                    <a 
                      href="mailto:info@devakusuma.com" 
                      className="text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      info@devakusuma.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services & FAQ */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 hover:bg-green-50 p-3 rounded transition-colors duration-300">
                    <h3 className="font-semibold text-gray-900">Plant Sales</h3>
                    <p className="text-gray-600">Wide variety of indoor, outdoor, and decorative plants</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 hover:bg-green-50 p-3 rounded transition-colors duration-300">
                    <h3 className="font-semibold text-gray-900">Landscaping</h3>
                    <p className="text-gray-600">Professional landscaping services for homes and businesses</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 hover:bg-green-50 p-3 rounded transition-colors duration-300">
                    <h3 className="font-semibold text-gray-900">Plant Care Consultation</h3>
                    <p className="text-gray-600">Expert advice on plant selection and maintenance</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 hover:bg-green-50 p-3 rounded transition-colors duration-300">
                    <h3 className="font-semibold text-gray-900">Bulk Orders</h3>
                    <p className="text-gray-600">Special pricing for institutions, resorts, and decorators</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="hover:bg-gray-50 p-4 rounded transition-colors duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">Do you deliver plants?</h3>
                    <p className="text-gray-600">
                      Yes, we offer delivery services within Rajamahendravaram and surrounding areas. 
                      Contact us for delivery charges and availability.
                    </p>
                  </div>
                  <div className="hover:bg-gray-50 p-4 rounded transition-colors duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">Can I visit the nursery anytime?</h3>
                    <p className="text-gray-600">
                      We're open every day from 5:00 AM to 7:00 PM. No appointment necessary - 
                      come explore our 10-acre nursery!
                    </p>
                  </div>
                  <div className="hover:bg-gray-50 p-4 rounded transition-colors duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">Do you provide plant care guidance?</h3>
                    <p className="text-gray-600">
                      Absolutely! Our experts provide detailed care instructions and ongoing support 
                      to help your plants thrive.
                    </p>
                  </div>
                  <div className="hover:bg-gray-50 p-4 rounded transition-colors duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                    <p className="text-gray-600">
                      We accept cash, UPI payments, and bank transfers. Payment details will be 
                      shared when you place your order.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-green-50 rounded-2xl p-12 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your green journey today. Browse our collection or get in touch for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Order via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/products'}
              className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
            >
              Browse Plants
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
