
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Sun, Thermometer, Calendar, AlertCircle } from "lucide-react";

const PlantCare = () => {
  const blogs = [
    {
      id: 1,
      title: "Essential Plant Care Guide for Beginners",
      excerpt: "Learn the fundamental principles of plant care that every plant parent should know.",
      readTime: "5 min read",
      category: "Beginner Guide",
      icon: <Leaf className="h-6 w-6" />,
      content: {
        intro: "Starting your plant journey can feel overwhelming, but with these essential tips, you'll be well on your way to becoming a successful plant parent.",
        sections: [
          {
            title: "Understanding Light Requirements",
            content: "Different plants have varying light needs. Most houseplants prefer bright, indirect light. Direct sunlight can scorch leaves, while too little light causes leggy growth. Place plants near windows but not in direct sun rays."
          },
          {
            title: "Watering Wisely",
            content: "The most common mistake is overwatering. Check soil moisture by inserting your finger 1-2 inches deep. Water when the top inch feels dry. Ensure pots have drainage holes to prevent root rot."
          },
          {
            title: "Choosing the Right Soil",
            content: "Use well-draining potting mix specific to your plant type. Regular garden soil is too heavy for containers. Good potting soil should be loose, retain some moisture, but drain excess water."
          },
          {
            title: "Feeding Your Plants",
            content: "Most houseplants need fertilizer during growing season (spring and summer). Use a balanced, water-soluble fertilizer diluted to half strength monthly. Avoid fertilizing in winter when growth slows."
          }
        ],
        tips: [
          "Start with easy-care plants like Snake Plant or ZZ Plant",
          "Group plants with similar care requirements together",
          "Rotate plants weekly for even growth",
          "Clean leaves regularly to improve photosynthesis"
        ]
      }
    },
    {
      id: 2,
      title: "Watering Techniques: When and How Much",
      excerpt: "Master the art of proper watering to keep your plants healthy and thriving.",
      readTime: "7 min read",
      category: "Watering",
      icon: <Droplets className="h-6 w-6" />,
      content: {
        intro: "Proper watering is crucial for plant health. Too much or too little water are the leading causes of houseplant problems.",
        sections: [
          {
            title: "The Finger Test Method",
            content: "Insert your finger 1-2 inches into the soil. If it feels dry, it's time to water. If it's still moist, wait a few more days. This simple method prevents both under and overwatering."
          },
          {
            title: "Seasonal Watering Adjustments",
            content: "Plants need less water in winter due to slower growth and lower light conditions. Reduce watering frequency by 25-50% during dormant months. Increase gradually as daylight hours extend in spring."
          },
          {
            title: "Water Quality Matters",
            content: "Use room temperature water to avoid shocking roots. If your tap water is heavily chlorinated, let it sit overnight before using. Rainwater or distilled water is ideal for sensitive plants."
          },
          {
            title: "Proper Watering Technique",
            content: "Water slowly and evenly until water drains from the bottom. This ensures all roots receive moisture. Empty saucers after 30 minutes to prevent standing water, which can cause root rot."
          }
        ],
        tips: [
          "Water early morning for best absorption",
          "Use pots with drainage holes always",
          "Bottom watering works well for African violets",
          "Self-watering systems help during vacations"
        ]
      }
    },
    {
      id: 3,
      title: "Common Plant Problems and Solutions",
      excerpt: "Identify and solve the most frequent issues that affect houseplants.",
      readTime: "8 min read",
      category: "Problem Solving",
      icon: <AlertCircle className="h-6 w-6" />,
      content: {
        intro: "Even experienced plant parents encounter problems. Learning to identify and treat common issues quickly can save your plants.",
        sections: [
          {
            title: "Yellow Leaves",
            content: "Usually indicates overwatering, poor drainage, or natural aging. Check soil moisture and drainage. Remove yellow leaves as they won't recover. Adjust watering schedule if soil is soggy."
          },
          {
            title: "Brown Leaf Tips",
            content: "Often caused by low humidity, fluoride in water, or fertilizer burn. Increase humidity with a pebble tray, use filtered water, and reduce fertilizer concentration. Trim brown tips with clean scissors."
          },
          {
            title: "Pest Problems",
            content: "Common pests include spider mites, aphids, and mealybugs. Isolate affected plants immediately. Use insecticidal soap or neem oil spray. Wipe leaves weekly to prevent infestations."
          },
          {
            title: "Leggy Growth",
            content: "Indicates insufficient light. Plants stretch toward light sources, becoming thin and weak. Move to brighter location or supplement with grow lights. Pinch growing tips to encourage bushier growth."
          }
        ],
        tips: [
          "Quarantine new plants for 2 weeks",
          "Inspect plants weekly during watering",
          "Keep plant first aid kit: neem oil, fungicide, clean tools",
          "Remove dead or diseased plant material promptly"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Plant Care Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice and tips to help you keep your plants healthy and thriving. 
            From beginner basics to advanced techniques.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="space-y-12">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      {blog.icon}
                    </div>
                    <div>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {blog.category}
                      </Badge>
                      <p className="text-white/80 text-sm mt-1">{blog.readTime}</p>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-3">{blog.title}</h2>
                  <p className="text-xl text-white/90">{blog.excerpt}</p>
                </div>
                
                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {blog.content.intro}
                  </p>
                  
                  <div className="space-y-8">
                    {blog.content.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-green-600">{index + 1}</span>
                          </div>
                          {section.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      Quick Tips
                    </h3>
                    <ul className="space-y-2">
                      {blog.content.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Reference Guide */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Care Reference</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Light</h3>
                <p className="text-sm text-gray-600">Bright, indirect light for most houseplants</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Water</h3>
                <p className="text-sm text-gray-600">When top inch of soil feels dry</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Thermometer className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Temperature</h3>
                <p className="text-sm text-gray-600">65-75°F (18-24°C) for optimal growth</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Fertilize</h3>
                <p className="text-sm text-gray-600">Monthly during growing season</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlantCare;
