
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import { Plant } from "@/data/plants";

interface PlantCareTabsProps {
  product: Plant;
}

const PlantCareTabs = ({ product }: PlantCareTabsProps) => {
  return (
    <Tabs defaultValue="care" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="care">Care Instructions</TabsTrigger>
        <TabsTrigger value="specs">Plant Details</TabsTrigger>
      </TabsList>
      
      <TabsContent value="care" className="mt-8">
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Leaf className="h-6 w-6 mr-2 text-green-600" />
              Plant Care Guide
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Light Requirements</h4>
                  <p className="text-gray-600">
                    {product.careLevel === 'Easy' ? 'Bright, indirect light or partial shade' :
                     product.careLevel === 'Medium' ? 'Bright, indirect light preferred' :
                     'Bright light with some direct morning sun'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Watering</h4>
                  <p className="text-gray-600">
                    {product.careLevel === 'Easy' ? 'Water when top inch of soil is dry' :
                     product.careLevel === 'Medium' ? 'Regular watering, keep soil slightly moist' :
                     'Careful watering schedule, avoid overwatering'}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="specs" className="mt-8">
        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Plant Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Category:</span>
                <span className="text-gray-600">{product.category}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Care Level:</span>
                <span className="text-gray-600">{product.careLevel}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Available Sizes:</span>
                <span className="text-gray-600">{product.sizes.length} options</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Stock Status:</span>
                <span className="text-green-600">In Stock</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default PlantCareTabs;
