export interface PlantSize {
  name: string;
  price: number;
}

export interface Plant {
  id: number;
  name: string;
  sizes: PlantSize[];
  image: string;
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
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1583606663585-39573b6e0a13?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1604603662088-3beeacabb8ad?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1565011523534-747a8601de95?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1585316829082-2a1dc8854e4e?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1598979997959-7750c5aa2378?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1601997357747-5394b3e6fb6c?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1586771711050-1182295b5e6f?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=400&fit=crop",
    category: "Combo Packs",
    description: "Perfect combination of air-purifying plants for healthier indoor air."
  },
  {
    id: 102,
    name: "Festival Floral Set",
    plants: ["Marigold", "Hibiscus", "Bougainvillea"],
    price: 165,
    originalPrice: 200,
    image: "https://images.unsplash.com/photo-1598979997959-7750c5aa2378?w=400&h=400&fit=crop",
    category: "Combo Packs",
    description: "Colorful flowering plants perfect for festivals and celebrations."
  },
  {
    id: 103,
    name: "Balcony Starter Kit",
    plants: ["Crotons", "Areca Palm", "Jade Plant"],
    price: 225,
    originalPrice: 280,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    category: "Combo Packs",
    description: "Ideal starter pack for creating a beautiful balcony garden."
  },
  {
    id: 104,
    name: "Gifting Pack (Small)",
    plants: ["Jade Plant", "Money Plant"],
    price: 100,
    originalPrice: 135,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop",
    category: "Combo Packs",
    description: "Perfect small gifting pack with lucky plants in decorative pots."
  }
];

export const categories = [
  "Foliage & Decorative Plants",
  "Flowering & Seasonal Plants", 
  "Air-Purifying Plants",
  "Combo Packs"
];
