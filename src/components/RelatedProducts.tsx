
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Plant } from "@/data/plants";

interface RelatedProductsProps {
  relatedProducts: Plant[];
  getProductImages: (productName: string) => string[];
}

const RelatedProducts = ({ relatedProducts, getProductImages }: RelatedProductsProps) => {
  if (relatedProducts.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedProducts.map((relatedProduct) => (
          <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={getProductImages(relatedProduct.name)[0]} 
                  alt={relatedProduct.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i <= Math.floor(relatedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({relatedProduct.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    From ₹{Math.min(...relatedProduct.sizes.map(size => size.price))}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
