export interface PlantSize {
  name: string;
  price: number;
}

export interface Plant {
  id: number;
  name: string;
  sizes: PlantSize[];
  image: string;
  images?: string[]; // Add multiple images support
  category: string;
  rating: number;
  inStock: boolean;
  description: string;
  careLevel: string;
}

export interface ComboPack {
  id: number;
  name: string;
  plants: string[];
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  description: string;
}

export const plants: Plant[] = [
  // Foliage & Decorative Plants
  {
    id: 1,
    name: "Ficus (All Types)",
    sizes: [
      { name: "Sapling", price: 25 },
      { name: "Medium", price: 140 },
      { name: "Basic", price: 200 }
    ],
    image: "https://images.unsplash.com/photo-1596547609811-70a5082c84cf?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596547609811-70a5082c84cf?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1597055181413-65e08a46a708?w=600&h=600&fit=crop"
    ],
    category: "Foliage & Decorative Plants",
    rating: 4.5,
    inStock: true,
    description: "Beautiful and hardy Ficus plants, perfect for indoor and outdoor decoration.",
    careLevel: "Easy"
  },
  {
    id: 2,
    name: "Areca Palm",
    sizes: [
      { name: "Sapling", price: 30 },
      { name: "Medium", price: 185 },
      { name: "Basic", price: 250 }
    ],
    image: "https://images.unsplash.com/photo-1598531403144-43fdb36c9ae8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598531403144-43fdb36c9ae8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1615309363679-fed456ff8113?w=600&h=600&fit=crop"
    ],
    category: "Foliage & Decorative Plants",
    rating: 4.7,
    inStock: true,
    description: "Elegant palm perfect for creating tropical ambiance in your space.",
    careLevel: "Medium"
  },
  {
    id: 3,
    name: "Crotons (Duck Foot, Gold Dust)",
    sizes: [
      { name: "Sapling", price: 30 },
      { name: "Medium", price: 110 },
      { name: "Basic", price: 180 }
    ],
    image: "https://images.unsplash.com/photo-1657082137442-c12169e8bfb9?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1657082137442-c12169e8bfb9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1657082136162-04169bd5bff1?w=600&h=600&fit=crop"
    ],
    category: "Foliage & Decorative Plants",
    rating: 4.4,
    inStock: true,
    description: "Vibrant colorful foliage plants that add tropical beauty to any garden.",
    careLevel: "Medium"
  },
  {
    id: 4,
    name: "Thuja / Morpankhi",
    sizes: [
      { name: "Sapling", price: 40 },
      { name: "Medium", price: 225 },
      { name: "Basic", price: 350 }
    ],
    image: "https://images.unsplash.com/photo-1660904703362-e5e08371d9d1?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1660904703362-e5e08371d9d1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567675181885-9207cafc2f38?w=600&h=600&fit=crop"
    ],
    category: "Foliage & Decorative Plants",
    rating: 4.6,
    inStock: true,
    description: "Evergreen coniferous plant perfect for landscaping and hedges.",
    careLevel: "Easy"
  },
  {
    id: 5,
    name: "Cordyline",
    sizes: [
      { name: "Sapling", price: 30 },
      { name: "Medium", price: 150 },
      { name: "Basic", price: 220 }
    ],
    image: "https://images.unsplash.com/photo-1688177213893-8cb8de5e42b4?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1688177213893-8cb8de5e42b4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1654595538764-95a1eeb3fced?w=600&h=600&fit=crop"
    ],
    category: "Foliage & Decorative Plants",
    rating: 4.3,
    inStock: true,
    description: "Striking ornamental plant with colorful sword-like leaves.",
    careLevel: "Medium"
  },
  {
    id: 6,
    name: "Dracaena Marginata",
    sizes: [
      { name: "Sapling", price: 40 },
      { name: "Medium", price: 185 },
      { name: "Basic", price: 280 }
    ],
    image: "https://images.unsplash.com/photo-1661074453190-755beac9fa9c?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1661074453190-755beac9fa9c?w=600&h=600&fit=crop"
    ],
    category: "Foliage & Decorative Plants",
    rating: 4.8,
    inStock: true,
    description: "Dragon tree with distinctive red-edged leaves, perfect for modern interiors.",
    careLevel: "Easy"
  },
  {
    id: 7,
    name: "Cycads",
    sizes: [
      { name: "Sapling", price: 115 },
      { name: "Medium", price: 350 },
      { name: "Basic", price: 550 }
    ],
    image: "https://images.unsplash.com/photo-1656088146383-155078ef1080?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1656088146383-155078ef1080?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1619506764515-7a438121fa69?w=600&h=600&fit=crop"
    ],
    category: "Foliage & Decorative Plants",
    rating: 4.9,
    inStock: true,
    description: "Ancient premium plants with unique architectural form and beauty.",
    careLevel: "Hard"
  },
  {
    id: 8,
    name: "Snake Plant",
    sizes: [
      { name: "Sapling", price: 25 },
      { name: "Medium", price: 115 },
      { name: "Basic", price: 180 }
    ],
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616961065849-edf307a08bcb?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599009944997-3544a939813c?w=600&h=600&fit=crop"
    ],
    category: "Air-Purifying Plants",
    rating: 4.9,
    inStock: true,
    description: "Hardy air-purifying plant that thrives in low light conditions.",
    careLevel: "Easy"
  },
  {
    id: 9,
    name: "ZZ Plant",
    sizes: [
      { name: "Sapling", price: 65 },
      { name: "Medium", price: 275 },
      { name: "Basic", price: 400 }
    ],
    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1622673037877-18ee56d1f990?w=600&h=600&fit=crop"
    ],
    category: "Air-Purifying Plants",
    rating: 4.8,
    inStock: true,
    description: "Low-maintenance plant with glossy leaves, perfect for busy lifestyles.",
    careLevel: "Easy"
  },
  {
    id: 10,
    name: "Jade Plant",
    sizes: [
      { name: "Sapling", price: 18 },
      { name: "Medium", price: 75 },
      { name: "Basic", price: 120 }
    ],
    image: "https://images.unsplash.com/photo-1621552330975-f5f9c85dc9c9?w=400&h=400&fit=crop",
    category: "Air-Purifying Plants",
    rating: 4.6,
    inStock: true,
    description: "Succulent known for bringing good luck and prosperity.",
    careLevel: "Easy"
  },
  {
    id: 11,
    name: "Spider Plant",
    sizes: [
      { name: "Sapling", price: 15 },
      { name: "Medium", price: 80 },
      { name: "Basic", price: 130 }
    ],
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1664133980546-4e8e41ba06da?w=600&h=600&fit=crop"
    ],
    category: "Air-Purifying Plants",
    rating: 4.7,
    inStock: true,
    description: "Easy-care hanging plant that produces baby plantlets.",
    careLevel: "Easy"
  },
  {
    id: 12,
    name: "Ferns",
    sizes: [
      { name: "Sapling", price: 28 },
      { name: "Medium", price: 120 },
      { name: "Basic", price: 150 }
    ],
    image: "https://images.unsplash.com/photo-1599148401005-fe6d7497cb5e?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599148401005-fe6d7497cb5e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504890283869-c3de3cea0c59?w=600&h=600&fit=crop"
    ],
    category: "Foliage & Decorative Plants",
    rating: 4.4,
    inStock: true,
    description: "Lush green ferns perfect for shaded areas and hanging baskets.",
    careLevel: "Medium"
  },
  
  // Flowering & Seasonal Plants
  {
    id: 13,
    name: "Bougainvillea",
    sizes: [
      { name: "Sapling", price: 18 },
      { name: "Medium", price: 105 },
      { name: "Basic", price: 160 }
    ],
    image: "https://images.unsplash.com/photo-1621151426120-54f14ddd34da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621151426120-54f14ddd34da?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1539650605498-6cc9ad4271db?w=600&h=600&fit=crop"
    ],
    category: "Flowering & Seasonal Plants",
    rating: 4.6,
    inStock: true,
    description: "Vibrant flowering vine perfect for creating colorful landscapes.",
    careLevel: "Medium"
  },
  {
    id: 14,
    name: "Hibiscus",
    sizes: [
      { name: "Sapling", price: 23 },
      { name: "Medium", price: 75 },
      { name: "Basic", price: 120 }
    ],
    image: "https://images.unsplash.com/photo-1567991722999-74f27f53f33a?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1567991722999-74f27f53f33a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613764670482-4bbbfb09b389?w=600&h=600&fit=crop"
    ],
    category: "Flowering & Seasonal Plants",
    rating: 4.5,
    inStock: true,
    description: "Beautiful tropical flowering shrub with large colorful blooms.",
    careLevel: "Medium"
  },
  {
    id: 15,
    name: "Marigold (Seasonal)",
    sizes: [
      { name: "Sapling", price: 8 },
      { name: "Medium", price: 45 },
      { name: "Basic", price: 70 }
    ],
    image: "https://images.unsplash.com/photo-1661142175513-a5f0871f1ad1?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1661142175513-a5f0871f1ad1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1709241394789-c6d55d9601e9?w=600&h=600&fit=crop"
    ],
    category: "Flowering & Seasonal Plants",
    rating: 4.3,
    inStock: true,
    description: "Bright seasonal flowers perfect for festivals and decorations.",
    careLevel: "Easy"
  },
  {
    id: 16,
    name: "Chrysanthemum",
    sizes: [
      { name: "Sapling", price: 15 },
      { name: "Medium", price: 60 },
      { name: "Basic", price: 95 }
    ],
    image: "https://images.unsplash.com/photo-1724073339133-938ada52e511?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1724073339133-938ada52e511?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580642178672-699fd3c0f399?w=600&h=600&fit=crop"
    ],
    category: "Flowering & Seasonal Plants",
    rating: 4.4,
    inStock: true,
    description: "Beautiful autumn flowering plant with diverse colors and forms.",
    careLevel: "Medium"
  },
  {
    id: 17,
    name: "Hybrid Roses",
    sizes: [
      { name: "Sapling", price: 30 },
      { name: "Medium", price: 115 },
      { name: "Basic", price: 180 }
    ],
    image: "https://images.unsplash.com/photo-1749424586787-2aa24a603b7b?w=400&h=400&fit=crop",
    category: "Flowering & Seasonal Plants",
    rating: 4.8,
    inStock: true,
    description: "Premium hybrid roses with enhanced fragrance and disease resistance.",
    careLevel: "Hard"
  },
  {
    id: 18,
    name: "Plumeria (Frangipani)",
    sizes: [
      { name: "Sapling", price: 50 },
      { name: "Medium", price: 225 },
      { name: "Basic", price: 350 }
    ],
    image: "https://images.unsplash.com/photo-1694735785416-c0dd9318edeb?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1694735785416-c0dd9318edeb?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1698146082209-114c235733c9?w=600&h=600&fit=crop"
    ],
    category: "Flowering & Seasonal Plants",
    rating: 4.7,
    inStock: true,
    description: "Fragrant tropical flowering tree with waxy colorful blooms.",
    careLevel: "Medium"
  },
  {
    id: 19,
    name: "Money Plant (Outdoor)",
    sizes: [
      { name: "Sapling", price: 15 },
      { name: "Medium", price: 60 },
      { name: "Basic", price: 95 }
    ],
    image: "https://images.unsplash.com/photo-1683743849084-71708a91e3f1?w=400&h=400&fit=crop",
    category: "Air-Purifying Plants",
    rating: 4.5,
    inStock: true,
    description: "Popular climbing plant believed to bring good fortune and prosperity.",
    careLevel: "Easy"
  }
];

export const comboPacks: ComboPack[] = [
  {
    id: 101,
    name: "Air Purifier Pack",
    plants: ["Snake Plant", "Spider Plant", "Dracaena Marginata"],
    price: 275,
    originalPrice: 320,
    image: "/lovable-uploads/snake.jpg",
    category: "Combo Packs",
    description: "Perfect combination of air-purifying plants for healthier indoor air."
  },
  {
    id: 102,
    name: "Festival Floral Set",
    plants: ["Marigold", "Hibiscus", "Bougainvillea"],
    price: 165,
    originalPrice: 200,
    image: "/lovable-uploads/marigold.jpg",
    category: "Combo Packs",
    description: "Colorful flowering plants perfect for festivals and celebrations."
  },
  {
    id: 103,
    name: "Balcony Starter Kit",
    plants: ["Crotons", "Areca Palm", "Jade Plant"],
    price: 225,
    originalPrice: 280,
    image: "/lovable-uploads/balcony.jpg",
    category: "Combo Packs",
    description: "Ideal starter pack for creating a beautiful balcony garden."
  },
  {
    id: 104,
    name: "Gifting Pack (Small)",
    plants: ["Jade Plant", "Money Plant"],
    price: 100,
    originalPrice: 135,
    image: "/lovable-uploads/moneyplant.jpg",
    category: "Combo Packs",
    description: "Perfect small gifting pack with lucky plants in decorative pots."
  },
  {
    id: 105,
    name: "Cactus & Succulent Collection",
    plants: ["Cactus", "Succulent", "Desert Plants"],
    price: 180,
    originalPrice: 220,
    image: "/lovable-uploads/cactus.jpg",
    category: "Combo Packs",
    description: "Beautiful collection of low-maintenance cacti and succulents in decorative pots."
  }
];

export const categories = [
  "Foliage & Decorative Plants",
  "Flowering & Seasonal Plants", 
  "Air-Purifying Plants",
  "Combo Packs"
];
