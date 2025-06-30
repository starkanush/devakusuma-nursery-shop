
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Flower, Wind, Gift } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { plants, comboPacks, categories } from "@/data/plants";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryInfo = {
    "Foliage & Decorative Plants": {
      icon: <Leaf className="h-8 w-8" />,
      description: "Beautiful foliage plants perfect for indoor and outdoor decoration",
      color: "green"
    },
    "Flowering & Seasonal Plants": {
      icon: <Flower className="h-8 w-8" />,
      description: "Colorful flowering plants that bloom throughout the seasons",
      color: "pink"
    },
    "Air-Purifying Plants": {
      icon: <Wind className="h-8 w-8" />,
      description: "Plants that naturally clean and purify indoor air",
      color: "blue"
    },
    "Combo Packs": {
      icon: <Gift className="h-8 w-8" />,
      description: "Specially curated plant combinations for gifting and decoration",
      color: "purple"
    }
  };

  const getCategoryPlants = (category: string) => {
    if (category === "Combo Packs") {
      return comboPacks;
    }
    return plants.filter(plant => plant.category === category);
  };

  const filteredPlants = selectedCategory ? getCategoryPlants(selectedCategory) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Plant Categories</h1>
          <p className="text-xl text-gray-600">
            Explore our carefully curated plant collections organized by type and purpose
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const info = categoryInfo[category as keyof typeof categoryInfo];
            const plantCount = getCategoryPlants(category).length;
            const isSelected = selectedCategory === category;
            
            return (
              <Card 
                key={category}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                  isSelected ? 'ring-2 ring-green-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedCategory(isSelected ? null : category)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    info.color === 'green' ? 'bg-green-100 text-green-600' :
                    info.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                    info.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {plantCount} {plantCount === 1 ? 'item' : 'items'}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Category Plants */}
        {selectedCategory && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{selectedCategory}</h2>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory(null)}
                className="text-gray-600"
              >
                Show All Categories
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlants.map((item) => (
                <Link 
                  key={item.id} 
                  to={selectedCategory === "Combo Packs" ? `/combo/${item.id}` : `/product/${item.id}`}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {selectedCategory === "Combo Packs" && 'originalPrice' in item && (
                        <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                          Save ₹{item.originalPrice - item.price}
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {item.name}
                      </h3>
                      
                      {selectedCategory === "Combo Packs" ? (
                        <div>
                          {'plants' in item && (
                            <p className="text-sm text-gray-600 mb-3">
                              Includes: {item.plants.join(', ')}
                            </p>
                          )}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold text-green-600">₹{item.price}</span>
                              {'originalPrice' in item && (
                                <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {'sizes' in item && (
                            <p className="text-sm text-gray-600 mb-2">
                              From ₹{Math.min(...item.sizes.map(size => size.price))}
                            </p>
                          )}
                          {'careLevel' in item && (
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                item.careLevel === 'Easy' ? 'bg-green-100 text-green-700' :
                                item.careLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}
                            >
                              {item.careLevel} Care
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {!selectedCategory && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Select a Category</h2>
            <p className="text-gray-600">Click on any category above to explore our plant collection</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
