
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlantSize } from "@/data/plants";

interface SizeSelectorProps {
  sizes: PlantSize[];
  selectedSize: PlantSize | null;
  onSizeSelect: (size: PlantSize) => void;
}

const SizeSelector = ({ sizes, selectedSize, onSizeSelect }: SizeSelectorProps) => {
  return (
    <div className="space-y-3">
      <h4 className="font-medium text-gray-900">Choose Size:</h4>
      <div className="grid grid-cols-1 gap-2">
        {sizes.map((size, index) => (
          <Button
            key={index}
            variant={selectedSize?.name === size.name ? "default" : "outline"}
            className={`justify-between p-4 h-auto ${
              selectedSize?.name === size.name 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "hover:bg-green-50 hover:border-green-300"
            }`}
            onClick={() => onSizeSelect(size)}
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{size.name}</span>
            </div>
            <Badge 
              variant={selectedSize?.name === size.name ? "secondary" : "default"}
              className={selectedSize?.name === size.name ? "bg-white text-green-600" : "bg-green-100 text-green-700"}
            >
              ₹{size.price}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
