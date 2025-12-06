export const CATEGORIES = [
  { id: 1, name: "Electronics", slug: "electronics", color: "#006D77" },
  { id: 2, name: "Fashion", slug: "fashion", color: "#0D8B99" },
  { id: 3, name: "Home & Kitchen", slug: "home", color: "#E29578" },
  { id: 4, name: "Books", slug: "books", color: "#F0B5A6" },
  { id: 5, name: "Sports", slug: "sports", color: "#06A77D" },
  { id: 6, name: "Toys", slug: "toys", color: "#F9A825" },
];

export const PRODUCTS = [
  // Electronics
  {
    id: 1,
    name: "Wireless Headphones Pro",
    category: "electronics",
    price: 129.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 312,
    description:
      "Premium noise-cancelling wireless headphones with 30-hour battery life",
    specs: [
      "Noise Cancellation",
      "30hr Battery",
      "Bluetooth 5.0",
      "Touch Controls",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch Ultra",
    category: "electronics",
    price: 349.99,
    originalPrice: 499.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 245,
    description:
      "Advanced fitness tracking with AMOLED display and 7-day battery",
    specs: [
      "AMOLED Display",
      "Fitness Tracking",
      "7-day Battery",
      "Water Resistant",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Portable SSD 1TB",
    category: "electronics",
    price: 89.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 456,
    description: "Ultra-fast external solid state drive with 1TB capacity",
    specs: ["1TB Storage", "550MB/s Speed", "Durable Design", "USB 3.2"],
    inStock: true,
  },
  {
    id: 4,
    name: "4K Webcam",
    category: "electronics",
    price: 79.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 189,
    description: "Crystal clear 4K video with auto-focus and wide-angle lens",
    specs: ["4K Resolution", "Auto Focus", "Wide Angle", "Built-in Mic"],
    inStock: true,
  },
  {
    id: 5,
    name: "Mechanical Keyboard RGB",
    category: "electronics",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1587829191301-8dcc0d20b8f0?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 523,
    description: "Premium mechanical keyboard with customizable RGB lighting",
    specs: [
      "Mechanical Switches",
      "RGB Lighting",
      "Programmable",
      "Aluminum Frame",
    ],
    inStock: true,
  },
  {
    id: 6,
    name: "USB-C Hub 7-in-1",
    category: "electronics",
    price: 49.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 234,
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader",
    specs: ["7 Ports", "Plug & Play", "Durable Design", "100W Power Delivery"],
    inStock: true,
  },

  // Fashion
  {
    id: 7,
    name: "Cotton T-Shirt Pack",
    category: "fashion",
    price: 24.99,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 678,
    description: "Pack of 3 premium quality cotton t-shirts in various colors",
    specs: ["100% Cotton", "3 Pack", "Pre-Shrunk", "Sizes XS-XXL"],
    inStock: true,
  },
  {
    id: 8,
    name: "Blue Denim Jeans",
    category: "fashion",
    price: 59.99,
    originalPrice: 89.99,
    image:
      "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 445,
    description: "Classic blue denim jeans with perfect fit and comfort",
    specs: ["100% Cotton Denim", "Regular Fit", "Deep Blue", "Sizes 28-40"],
    inStock: true,
  },
  {
    id: 9,
    name: "Leather Casual Shoes",
    category: "fashion",
    price: 84.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 356,
    description: "Comfortable leather casual shoes perfect for everyday wear",
    specs: ["Genuine Leather", "Cushioned Sole", "Brown Color", "Sizes 6-13"],
    inStock: true,
  },
  {
    id: 10,
    name: "Winter Jacket",
    category: "fashion",
    price: 119.99,
    originalPrice: 179.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 289,
    description: "Warm and stylish winter jacket with water-resistant coating",
    specs: ["Water Resistant", "Thermal Lining", "Black", "Sizes XS-XXL"],
    inStock: true,
  },
  {
    id: 11,
    name: "Wool Sweater",
    category: "fashion",
    price: 69.99,
    originalPrice: 109.99,
    image:
      "https://images.unsplash.com/photo-1579233715033-5f19ad496d4d?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 267,
    description: "Cozy merino wool sweater for cold weather",
    specs: ["Merino Wool", "Crew Neck", "Navy Blue", "Hand Wash Only"],
    inStock: true,
  },
  {
    id: 12,
    name: "Canvas Backpack",
    category: "fashion",
    price: 49.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 412,
    description: "Durable canvas backpack with multiple compartments",
    specs: [
      "Canvas Material",
      "30L Capacity",
      "Water Resistant",
      "Laptop Pocket",
    ],
    inStock: true,
  },

  // Home & Kitchen
  {
    id: 13,
    name: "Non-Stick Cookware Set",
    category: "home",
    price: 89.99,
    originalPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 523,
    description:
      "Complete 8-piece non-stick cookware set for all your cooking needs",
    specs: [
      "8 Piece Set",
      "Aluminum Body",
      "Dishwasher Safe",
      "Heat Resistant Handles",
    ],
    inStock: true,
  },
  {
    id: 14,
    name: "Coffee Maker 12 Cup",
    category: "home",
    price: 34.99,
    originalPrice: 59.99,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 334,
    description: "Programmable coffee maker with 12-cup capacity",
    specs: [
      "12 Cup Capacity",
      "Programmable Timer",
      "Keep Warm Feature",
      "Drip Filter",
    ],
    inStock: true,
  },
  {
    id: 15,
    name: "Stainless Steel Blender",
    category: "home",
    price: 74.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a0be6070?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 267,
    description: "Powerful blender with stainless steel container",
    specs: [
      "1200W Motor",
      "Stainless Steel Pitcher",
      "5 Speed Settings",
      "Pulse Function",
    ],
    inStock: true,
  },
  {
    id: 16,
    name: "Bed Sheet Set 1000TC",
    category: "home",
    price: 39.99,
    originalPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1584622416885-77d1e3f45caa?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 445,
    description: "Luxurious 1000 thread count cotton bed sheet set",
    specs: [
      "1000 Thread Count",
      "100% Egyptian Cotton",
      "4 Piece Set",
      "Deep Pocket",
    ],
    inStock: true,
  },
  {
    id: 17,
    name: "LED Desk Lamp",
    category: "home",
    price: 29.99,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1565636192335-14b8ee0e7fa1?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 189,
    description: "Energy-efficient LED desk lamp with adjustable brightness",
    specs: [
      "LED Technology",
      "Adjustable Brightness",
      "USB Charging",
      "Touch Control",
    ],
    inStock: true,
  },
  {
    id: 18,
    name: "Ceramic Dinner Set",
    category: "home",
    price: 64.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d782d?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 278,
    description: "12-piece ceramic dinner set with elegant design",
    specs: [
      "12 Piece Set",
      "Dishwasher Safe",
      "Microwave Safe",
      "Elegant Design",
    ],
    inStock: true,
  },

  // Books
  {
    id: 19,
    name: "The Design of Everyday Things",
    category: "books",
    price: 14.99,
    originalPrice: 24.99,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 612,
    description:
      "Essential reading about design and user experience by Donald Norman",
    specs: ["Paperback", "384 Pages", "English", "Published 2013"],
    inStock: true,
  },
  {
    id: 20,
    name: "Atomic Habits",
    category: "books",
    price: 13.99,
    originalPrice: 23.99,
    image:
      "https://images.unsplash.com/photo-1507842217343-583f7270a28b?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 1250,
    description:
      "Build good habits and break bad ones with practical strategies",
    specs: ["Paperback", "320 Pages", "English", "Bestseller"],
    inStock: true,
  },
  {
    id: 21,
    name: "The Lean Startup",
    category: "books",
    price: 12.99,
    originalPrice: 22.99,
    image:
      "https://images.unsplash.com/photo-1508866266546-720aeead4f97?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 478,
    description: "How today's entrepreneurs build successful businesses",
    specs: ["Paperback", "336 Pages", "English", "Business"],
    inStock: true,
  },
  {
    id: 22,
    name: "Deep Work",
    category: "books",
    price: 11.99,
    originalPrice: 21.99,
    image:
      "https://images.unsplash.com/photo-1543002588-d83a5ad7b67f?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 534,
    description: "Rules for focused success in a distracted world",
    specs: ["Paperback", "304 Pages", "English", "Self-Help"],
    inStock: true,
  },
  {
    id: 23,
    name: "Thinking, Fast and Slow",
    category: "books",
    price: 15.99,
    originalPrice: 25.99,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 701,
    description: "Insights into the two systems that drive the way we think",
    specs: ["Paperback", "512 Pages", "English", "Psychology"],
    inStock: true,
  },
  {
    id: 24,
    name: "The Pragmatic Programmer",
    category: "books",
    price: 34.99,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 389,
    description: "Your journey to mastery in software development",
    specs: ["Paperback", "592 Pages", "English", "Programming"],
    inStock: true,
  },

  // Sports
  {
    id: 25,
    name: "Yoga Mat Premium",
    category: "sports",
    price: 29.99,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 423,
    description: "Non-slip premium yoga mat with carrying strap",
    specs: [
      "6mm Thickness",
      "Non-Slip Surface",
      "Carrying Strap",
      "Purple Color",
    ],
    inStock: true,
  },
  {
    id: 26,
    name: "Dumbbells Set 50lb",
    category: "sports",
    price: 99.99,
    originalPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 312,
    description: "Complete set of dumbbells for strength training",
    specs: ["50lb Total", "Adjustable Weight", "Cast Iron", "Rubber Coated"],
    inStock: true,
  },
  {
    id: 27,
    name: "Running Shoes",
    category: "sports",
    price: 89.99,
    originalPrice: 139.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 256,
    description: "Lightweight running shoes with responsive cushioning",
    specs: [
      "Responsive Cushioning",
      "Lightweight",
      "Breathable Mesh",
      "All Sizes",
    ],
    inStock: true,
  },
  {
    id: 28,
    name: "Resistance Bands Set",
    category: "sports",
    price: 24.99,
    originalPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1565590088001-86e86aa27fc5?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 178,
    description: "Set of 5 resistance bands with different resistance levels",
    specs: ["5 Bands", "Different Resistance Levels", "Portable", "Latex Free"],
    inStock: true,
  },
  {
    id: 29,
    name: "Water Bottle 1L",
    category: "sports",
    price: 19.99,
    originalPrice: 34.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7e406dd6b527?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 267,
    description: "Insulated water bottle keeps drinks cold for 24 hours",
    specs: [
      "1L Capacity",
      "Double Wall Insulation",
      "BPA Free",
      "Stainless Steel",
    ],
    inStock: true,
  },
  {
    id: 30,
    name: "Gym Bag Large",
    category: "sports",
    price: 39.99,
    originalPrice: 64.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 189,
    description: "Spacious gym bag with multiple compartments",
    specs: [
      "Large Capacity",
      "Water Resistant",
      "Shoe Compartment",
      "Black Color",
    ],
    inStock: true,
  },

  // Toys
  {
    id: 31,
    name: "Building Blocks Set",
    category: "toys",
    price: 29.99,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1589122624678-67ecc0cdedf0?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 234,
    description: "1000-piece building blocks set for creative construction",
    specs: ["1000 Pieces", "Multiple Colors", "Age 3+", "Educational"],
    inStock: true,
  },
  {
    id: 32,
    name: "Remote Control Car",
    category: "toys",
    price: 44.99,
    originalPrice: 74.99,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 198,
    description: "High-speed remote control car with 2.4GHz technology",
    specs: ["2.4GHz Technology", "High Speed", "Rechargeable", "Red Color"],
    inStock: true,
  },
  {
    id: 33,
    name: "Puzzle Game 3D",
    category: "toys",
    price: 19.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1589122624678-67ecc0cdedf0?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 156,
    description: "Interactive 3D puzzle game for brain development",
    specs: ["3D Interactive", "216 Pieces", "Educational", "Age 4+"],
    inStock: true,
  },
  {
    id: 34,
    name: "Doll House Deluxe",
    category: "toys",
    price: 84.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1575598221986-5cc3f51f5eb8?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 212,
    description: "Beautiful multi-story doll house with furniture and family",
    specs: ["4 Floors", "Furniture Included", "Interactive Elements", "Age 3+"],
    inStock: true,
  },
  {
    id: 35,
    name: "Science Kit Experiment",
    category: "toys",
    price: 39.99,
    originalPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1516733725821-8da647e88e69?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 289,
    description: "Complete science experiment kit with 50+ activities",
    specs: ["50+ Experiments", "Educational", "STEM Learning", "Age 8+"],
    inStock: true,
  },
  {
    id: 36,
    name: "Board Game Family Pack",
    category: "toys",
    price: 24.99,
    originalPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1516733725821-8da647e88e69?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 178,
    description: "Collection of 5 classic family board games",
    specs: ["5 Games Included", "Family Friendly", "Age 6+", "Complete Rules"],
    inStock: true,
  },
];

// Mock API functions with delays
export const fetchProducts = async (filters = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let filtered = PRODUCTS;

  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
    );
  }

  if (filters.minPrice) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice);
  }

  if (filters.maxPrice) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice);
  }

  if (filters.minRating) {
    filtered = filtered.filter((p) => p.rating >= filters.minRating);
  }

  if (filters.sort) {
    if (filters.sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === "newest") {
      filtered.sort((a, b) => b.id - a.id);
    }
  }

  return filtered;
};

export const fetchProductById = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return PRODUCTS.find((p) => p.id === parseInt(id));
};

export const searchProducts = async (query) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  const searchLower = query.toLowerCase();
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower) ||
      p.category.toLowerCase().includes(searchLower)
  );
};
