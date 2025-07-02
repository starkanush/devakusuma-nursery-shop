
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductInfo from "@/components/ProductInfo";
import PlantCareTabs from "@/components/PlantCareTabs";
import RelatedProducts from "@/components/RelatedProducts";
import { plants } from "@/data/plants";

const ProductDetail = () => {
  const { id } = useParams();
  const product = plants.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products" className="text-green-600 hover:text-green-700">
            ← Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Updated accurate plant images
  const getProductImages = (productName: string) => {
    const imageMap: { [key: string]: string[] } = {
      "Ficus (All Types)": [
        "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1612363148951-8b0e3831e90c?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=600&fit=crop"
      ],
      "Areca Palm": [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop"
      ],
      "Crotons (Duck Foot, Gold Dust)": [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=600&fit=crop"
      ],
      "Thuja / Morpankhi": [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=600&fit=crop"
      ],
      "Cordyline": [
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop"
      ],
      "Dracaena Marginata": [
        "https://images.unsplash.com/photo-1463320898675-b6740e668b25?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583606663585-39573b6e0a13?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1587897689715-9eae8b81b68f?w=600&h=600&fit=crop"
      ],
      "Cycads": [
        "https://images.unsplash.com/photo-1604603662088-3beeacabb8ad?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=600&fit=crop"
      ],
      "Snake Plant": [
        "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&h=600&fit=crop"
      ],
      "ZZ Plant": [
        "https://images.unsplash.com/photo-1586084715209-8d10e8e1c2b5?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1463320898675-b6740e668b25?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ],
      "Jade Plant": [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ],
      "Spider Plant": [
        "https://images.unsplash.com/photo-1565011523534-747a8601de95?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop"
      ],
      "Ferns": [
        "https://images.unsplash.com/photo-1585316829082-2a1dc8854e4e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
      ],
      "Bougainvillea": [
        "https://images.unsplash.com/photo-1598979997959-7750c5aa2378?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop"
      ],
      "Hibiscus": [
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop"
      ],
      "Marigold (Seasonal)": [
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1601997357747-5394b3e6fb6c?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop"
      ],
      "Chrysanthemum": [
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1601997357747-5394b3e6fb6c?w=600&h=600&fit=crop"
      ],
      "Hybrid Roses": [
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
      ],
      "Plumeria (Frangipani)": [
        "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
      ],
      "Money Plant (Outdoor)": [
        "https://images.unsplash.com/photo-1586771711050-1182295b5e6f?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=600&fit=crop"
      ]
    };
    
    return imageMap[productName] || [
      product.image,
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
    ];
  };

  const images = getProductImages(product.name);
  const relatedProducts = plants.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Plants
          </Link>
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-green-600">Plants</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <ProductImageGallery images={images} productName={product.name} />

          {/* Product Info */}
          <ProductInfo product={product} images={images} />
        </div>

        {/* Plant Details Tabs */}
        <div className="mb-16">
          <PlantCareTabs product={product} />
        </div>

        {/* Related Products */}
        <RelatedProducts 
          relatedProducts={relatedProducts}
          getProductImages={getProductImages}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
