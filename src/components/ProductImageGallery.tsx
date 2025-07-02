
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <img 
          src={images[selectedImage]} 
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === index ? 'border-green-500' : 'border-gray-200'
            }`}
          >
            <img 
              src={image} 
              alt={`${productName} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
