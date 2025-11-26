import {
  CollectionImage,
  CollectionSection,
  FeaturedProduct,
  GalleryImage,
  SofaProduct,
  SofaTypeKey,
} from "./interface";

export const collectionImages: CollectionImage[] = [
  {
    id: 1,
    src: "/images/sofas/IMG_20250303_195036.jpg",
    alt: "Modern Living Room",
    category: "Living Room",
    price: "₹85,000",
    description:
      "Elegant modern sofa with premium stainless steel frame and high-density cushioning for superior comfort.",
  },
  {
    id: 2,
    src: "/images/sofas/IMG_20250303_195129.jpg",
    alt: "Lounge Collection",
    category: "Lounge",
    price: "₹75,000",
    description:
      "Premium lounge sofa crafted with precision and designed for maximum relaxation in your living space.",
  },
  {
    id: 3,
    src: "/images/sofas/IMG_20250303_195253.jpg",
    alt: "Premium Seating",
    category: "Seating",
    price: "₹92,000",
    description:
      "Luxurious premium seating collection featuring our signature stainless steel frame and plush cushioning.",
  },
  {
    id: 4,
    src: "/images/sofas/WhatsApp Image 2025-03-13 at 17.09.16_fced05a6.jpg",
    alt: "Designer Series",
    category: "Designer",
    price: "₹120,000",
    description:
      "Exclusive designer series sofa with premium materials and expert craftsmanship for discerning customers.",
  },
  {
    id: 5,
    src: "/images/sofas/Sofa Catalogue_page-0072.jpg",
    alt: "Luxury Collection",
    category: "Luxury",
    price: "₹150,000",
    description:
      "Our top-tier luxury collection featuring the finest materials and exceptional attention to detail.",
  },
  {
    id: 6,
    src: "/images/sofas/IMG_20250303_195203.jpg",
    alt: "Premium Design",
    category: "Premium",
    price: "₹110,000",
    description:
      "Premium design sofa that combines aesthetic appeal with unmatched comfort and durability.",
  },
  {
    id: 7,
    src: "/images/sofas/Sofa Catalogue_page-0006 - Copy.jpg",
    alt: "Modern Series",
    category: "Modern",
    price: "₹88,000",
    description:
      "Contemporary modern series with sleek lines and innovative design elements for the modern home.",
  },
  {
    id: 8,
    src: "/images/sofas/IMG_20250303_195623.jpg",
    alt: "Exclusive Set",
    category: "Exclusive",
    price: "₹135,000",
    description:
      "Exclusive limited-edition sofa set designed for those who appreciate distinctive luxury furniture.",
  },
  {
    id: 9,
    src: "/images/sofas/Sofa Catalogue_page-0064.jpg",
    alt: "Comfort Solutions",
    category: "Comfort",
    price: "₹95,000",
    description:
      "Engineered for maximum comfort with ergonomic design and premium cushioning for everyday relaxation.",
  },
  {
    id: 10,
    src: "/images/sofas/IMG_20250304_141654.jpg",
    alt: "Contemporary Design",
    category: "Contemporary",
    price: "₹105,000",
    description:
      "Contemporary design sofa that makes a statement while offering exceptional comfort and durability.",
  },
  {
    id: 11,
    src: "/images/sofas/IMG_20250304_141721.jpg",
    alt: "Premium Living",
    category: "Premium",
    price: "₹125,000",
    description:
      "Premium living room sofa that becomes the centerpiece of your home with its striking design.",
  },
  {
    id: 12,
    src: "/images/sofas/IMG_20250304_144613.jpg",
    alt: "Luxury Solutions",
    category: "Luxury",
    price: "₹140,000",
    description:
      "Luxury solutions for discerning homeowners who want the perfect blend of style and comfort.",
  },
];

export const collectionSections: CollectionSection[] = [
  {
    title: "Luxury Format",
    subtitle: "STALLION COMFORT SYSTEMS",
    description: "LEVEL NEXT",
    items: [
      "Stationary Sofas",
      "Motion Sofas",
      "Home Theatre",
      "Armchairs",
      "Day Bed",
      "Sofa Cum Bed",
      "Recliners",
      "Beds",
    ],
    delay: 0,
    image: "/images/sofas/IMG_20250303_195732.jpg",
  },
  {
    title: "Case Goods",
    items: [
      "Dining Tables",
      "Dining Chairs",
      "Center Tables",
      "Consoles",
      "Office Tables",
      "Office Chairs",
    ],
    delay: 0.2,
    image: "/images/sofas/IMG_20250303_195107.jpg",
  },
  {
    title: "Fixed Cabinets",
    items: ["Kitchens", "Wardrobes", "TV Cabinets"],
    delay: 0.4,
    image: "/images/sofas/Sofa Catalogue_page-0097.jpg",
  },
];

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: "Brandon Sofa",
    price: "Starting at ₹85,000",
    image: "/images/sofas/IMG_20250303_195036.jpg",
    category: "Living Room",
    link: "/category/living-room/sofas/straight",
  },
  {
    id: 2,
    name: "Enzo Loveseat",
    price: "Starting at ₹65,000",
    image: "/images/sofas/IMG_20250303_195253.jpg", // Changed to new image
    category: "Lounge",
    link: "/category/living-room/sofas/curved",
  },
  {
    id: 3,
    name: "Kenshester Classic",
    price: "Starting at ₹95,000",
    image: "/images/sofas/IMG_20250303_195501.jpg", // Changed to new image
    category: "Premium",
    link: "/category/living-room/sofas/corner",
  },
  {
    id: 4,
    name: "Gene Sectional",
    price: "Starting at ₹120,000",
    image: "/images/sofas/IMG_20250303_195608.jpg", // Changed to new image
    category: "Sectionals",
    link: "/category/living-room/sofas/u-shaped",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/sofas/IMG_20250303_195036.jpg",
    alt: "Elegant Modern Living Room Setup",
    gridArea: "span 2 / span 2",
    category: "Living Room",
  },
  {
    id: 2,
    src: "/images/sofas/IMG_20250303_195129.jpg",
    alt: "Contemporary Lounge Design",
    gridArea: "span 1 / span 1",
    category: "Lounge",
  },
  {
    id: 3,
    src: "/images/sofas/IMG_20250303_195253.jpg", // Changed to new image
    alt: "Premium Comfort Seating",
    gridArea: "span 2 / span 1",
    category: "Seating",
  },
  {
    id: 4,
    src: "/images/sofas/WhatsApp Image 2025-03-13 at 17.09.16_fced05a6.jpg", // Changed to new image
    alt: "Modern Living Space",
    gridArea: "span 1 / span 1",
    category: "Living Space",
  },
  {
    id: 5,
    src: "/images/sofas/Sofa Catalogue_page-0072.jpg", // Changed to new image
    alt: "Luxury Sofa Collection",
    gridArea: "span 2 / span 2",
    category: "Premium Collection",
  },
  {
    id: 6,
    src: "/images/sofas/IMG_20250303_195203.jpg", // Changed image
    alt: "Designer Living Room Set",
    gridArea: "span 1 / span 2",
    category: "Designer Series",
  },
  {
    id: 7,
    src: "/images/sofas/Sofa Catalogue_page-0006 - Copy.jpg", // Changed to new image
    alt: "Premium Furniture Design",
    gridArea: "span 2 / span 1",
    category: "Premium Design",
  },
  {
    id: 8,
    src: "/images/sofas/IMG_20250303_195623.jpg",
    alt: "Exclusive Sofa Collection",
    gridArea: "span 1 / span 1",
    category: "Exclusive",
  },
  {
    id: 9,
    src: "/images/sofas/Sofa Catalogue_page-0064.jpg", // Changed image
    alt: "Modern Comfort Solutions",
    gridArea: "span 2 / span 2",
    category: "Comfort Collection",
  },
  {
    id: 10,
    src: "/images/sofas/IMG_20250304_141654.jpg",
    alt: "Contemporary Living Design",
    gridArea: "span 1 / span 2",
    category: "Contemporary",
  },
  {
    id: 11,
    src: "/images/sofas/IMG_20250304_141721.jpg",
    alt: "Premium Living Room Collection",
    gridArea: "span 2 / span 1",
    category: "Premium",
  },
  {
    id: 12,
    src: "/images/sofas/IMG_20250304_144613.jpg",
    alt: "Luxury Interior Solutions",
    gridArea: "span 1 / span 1",
    category: "Luxury",
  },
];

export const slides = [
  {
    image:
      "https://images.pexels.com/photos/6312362/pexels-photo-6312362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Masterful Craftsmanship",
    subtitle:
      "Meticulously crafted stainless steel furniture where durability meets sophistication.",
  },
  {
    image:
      "https://images.pexels.com/photos/8089083/pexels-photo-8089083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Timeless Sustainability",
    subtitle: "Environmentally conscious designs built to last generations.",
  },
  {
    image:
      "https://images.pexels.com/photos/14613922/pexels-photo-14613922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Premium Materials",
    subtitle:
      "Only the finest stainless steel and premium finishes for exceptional quality.",
  },
  {
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    title: "Modern Elegance",
    subtitle:
      "Contemporary designs that enhance any living space with timeless appeal.",
  },
  {
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    title: "Artisan Excellence",
    subtitle:
      "Each piece crafted by skilled artisans with decades of expertise.",
  },
];

export const artisans = [
  {
    name: "David Chen",
    role: "Master Craftsman",
    specialty: "Metal Forming",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "With over 20 years of experience in metalworking, David leads our innovative design implementations.",
  },
  {
    name: "Sarah Martinez",
    role: "Design Specialist",
    specialty: "Surface Finishing",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "Sarah's expertise in surface treatments creates our signature aesthetic finishes.",
  },
  {
    name: "James Wilson",
    role: "Technical Director",
    specialty: "Structural Engineering",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "James ensures every piece meets our exacting standards for durability and stability.",
  },
  {
    name: "Maria Kovac",
    role: "Artisan Designer",
    specialty: "Custom Solutions",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description:
      "Maria specializes in creating bespoke furniture solutions for unique spaces.",
  },
];

export const locations = [
  {
    name: "Main Showroom",
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    phone: "+1 (310) 555-0123",
    email: "beverly@example.com",
    hours: "Mon-Sat: 10am-7pm, Sun: 11am-6pm",
  },
  {
    name: "Design Studio",
    address: "456 Design District, Miami, FL 33137",
    phone: "+1 (305) 555-0456",
    email: "miami@example.com",
    hours: "Mon-Fri: 9am-6pm, Sat: 10am-5pm",
  },
];
export const techniques = [
  {
    name: "Precision Welding",
    description:
      "Our master welders use advanced techniques to create seamless joints that are both strong and aesthetically pleasing.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Surface Finishing",
    description:
      "Multiple stages of finishing ensure each piece has our signature luxurious appearance and durability.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Custom Forming",
    description:
      "State-of-the-art forming techniques allow us to create unique shapes while maintaining structural integrity.",
    image:
      "https://images.unsplash.com/photo-1564540574859-0dfb63985953?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

export const qualityStandards = [
  {
    title: "Material Selection",
    description:
      "Only the highest grade stainless steel is used in our furniture, ensuring longevity and beauty.",
  },
  {
    title: "Quality Control",
    description:
      "Each piece undergoes rigorous testing and inspection at multiple stages of production.",
  },
  {
    title: "Environmental Standards",
    description:
      "Our processes meet or exceed international environmental standards for sustainable manufacturing.",
  },
  {
    title: "Durability Testing",
    description:
      "Every design undergoes extensive testing to ensure it meets our strict durability requirements.",
  },
];

export const categories = [
  { value: "living-room", label: "Living Room" },
  { value: "dining-room", label: "Dining Room" },
  { value: "bedroom", label: "Bedroom" },
  { value: "office", label: "Office" },
  { value: "outdoor", label: "Outdoor" },
];

export const subcategories: Record<
  string,
  Array<{ value: string; label: string }>
> = {
  "living-room": [
    { value: "sofas", label: "Sofas" },
    { value: "chairs", label: "Chairs" },
    { value: "tables", label: "Tables" },
    { value: "storage", label: "Storage" },
  ],
  "dining-room": [
    { value: "tables", label: "Tables" },
    { value: "chairs", label: "Chairs" },
    { value: "sideboards", label: "Sideboards" },
  ],
  bedroom: [
    { value: "beds", label: "Beds" },
    { value: "wardrobes", label: "Wardrobes" },
    { value: "dressers", label: "Dressers" },
  ],
  office: [
    { value: "desks", label: "Desks" },
    { value: "chairs", label: "Chairs" },
    { value: "storage", label: "Storage" },
  ],
  outdoor: [
    { value: "seating", label: "Seating" },
    { value: "tables", label: "Tables" },
    { value: "loungers", label: "Loungers" },
  ],
};

// Sofa types for the third level of categorization
export const sofaTypes = [
  { value: "sectional", label: "Sectional Sofas" },
  { value: "loveseat", label: "Loveseats" },
  { value: "sleeper", label: "Sleeper Sofas" },
  { value: "recliner", label: "Recliner Sofas" },
  { value: "chaise", label: "Chaise Lounges" },
  { value: "futon", label: "Futons" },
];

export const dealers = [
  {
    name: "Luxury Home Furnishings",
    location: "Los Angeles, CA",
    type: "Premium Retailer",
    contact: {
      phone: "+1 (323) 555-0101",
      email: "sales@luxuryhome.example.com",
    },
    specialties: [
      "Custom Orders",
      "Interior Design Services",
      "White Glove Delivery",
    ],
  },
  {
    name: "Modern Living Solutions",
    location: "Chicago, IL",
    type: "Authorized Dealer",
    contact: {
      phone: "+1 (312) 555-0202",
      email: "info@modernliving.example.com",
    },
    specialties: ["Commercial Projects", "Space Planning", "Installation"],
  },
  {
    name: "Elite Interiors",
    location: "Dallas, TX",
    type: "Premium Retailer",
    contact: {
      phone: "+1 (214) 555-0303",
      email: "sales@eliteinteriors.example.com",
    },
    specialties: [
      "Residential Design",
      "Custom Finishes",
      "Project Management",
    ],
  },
];

export const partnershipBenefits = [
  {
    title: "Exclusive Products",
    description: "Access to limited edition and dealer-exclusive collections.",
  },
  {
    title: "Training Program",
    description:
      "Comprehensive product knowledge and sales training for your team.",
  },
  {
    title: "Marketing Support",
    description: "Co-branded marketing materials and promotional support.",
  },
  {
    title: "Priority Service",
    description: "Dedicated account manager and priority order processing.",
  },
];

export const milestones = [
  {
    year: "1985",
    title: "Our Beginning",
    description:
      "Founded with a vision to revolutionize furniture craftsmanship using stainless steel.",
  },
  {
    year: "1995",
    title: "Innovation in Design",
    description:
      "Pioneered new techniques in stainless steel furniture manufacturing.",
  },
  {
    year: "2005",
    title: "Global Expansion",
    description:
      "Expanded operations to international markets, bringing our craftsmanship worldwide.",
  },
  {
    year: "2015",
    title: "Sustainability Initiative",
    description:
      "Implemented eco-friendly production processes and sustainable material sourcing.",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description:
      "Embracing modern technology while maintaining traditional craftsmanship values.",
  },
];

export const historicalEvents = [
  {
    year: "1980",
    title: "The Beginning",
    description:
      "The foundation of our company in a small workshop, where our founder first began experimenting with stainless steel furniture design.",
  },
  {
    year: "1985",
    title: "First Collection",
    description:
      "Launch of our first complete furniture collection, featuring innovative stainless steel designs that caught the industry's attention.",
  },
  {
    year: "1990",
    title: "International Recognition",
    description:
      "Our designs received international acclaim at the Milan Furniture Fair, establishing our presence in the global market.",
  },
  {
    year: "2000",
    title: "Manufacturing Excellence",
    description:
      "Opening of our state-of-the-art manufacturing facility, incorporating the latest technology in stainless steel fabrication.",
  },
  {
    year: "2010",
    title: "Sustainable Innovation",
    description:
      "Implementation of eco-friendly manufacturing processes and sustainable material sourcing practices.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Embracing digital technology in design and customer experience while maintaining our commitment to craftsmanship.",
  },
];

export const showrooms = [
  {
    name: "Beverly Hills Flagship",
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    phone: "+1 (310) 555-0123",
    email: "beverly@example.com",
    hours: "Mon-Sat: 10am-7pm, Sun: 11am-6pm",
    image:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Virtual Tour Available",
      "Private Consultations",
      "Custom Order Service",
    ],
  },
  {
    name: "Miami Design District",
    address: "456 Design Avenue, Miami, FL 33137",
    phone: "+1 (305) 555-0456",
    email: "miami@example.com",
    hours: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm",
    image:
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Design Consultation",
      "3D Visualization",
      "Installation Service",
    ],
  },
  {
    name: "New York Gallery",
    address: "789 Madison Avenue, New York, NY 10065",
    phone: "+1 (212) 555-0789",
    email: "newyork@example.com",
    hours: "Mon-Sat: 11am-7pm, Sun: By Appointment",
    image:
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: ["Exclusive Collections", "Event Space", "Trade Program"],
  },
];

export const sofaData: Record<
  SofaTypeKey,
  {
    title: string;
    description: string;
    products: SofaProduct[];
  }
> = {
  straight: {
    title: "Straight Sofas",
    description:
      "Classic and versatile straight sofas that fit perfectly against walls and in traditional living spaces.",
    products: [
      {
        id: 1,
        name: "Elegance Straight Sofa",
        price: "₹85,000",
        description:
          "A classic straight sofa with premium upholstery and solid wood frame, perfect for traditional living rooms.",
        image: "/images/sofas/IMG_20250303_195036.jpg",
        features: [
          "Classic design",
          "Deep cushioning",
          "Premium upholstery",
          "Solid wood frame",
        ],
        dimensions: "220cm x 90cm x 85cm",
        materials: ["Premium Fabric", "Solid Wood Frame", "High-density Foam"],
        colors: ["Beige", "Grey", "Blue", "Green"],
        availability: "In Stock",
        delivery: "3-4 weeks",
      },
      {
        id: 2,
        name: "Modern Minimalist Sofa",
        price: "₹95,000",
        description:
          "Contemporary straight sofa with sleek lines and metal legs, ideal for modern interiors.",
        image: "/images/sofas/IMG_20250303_195233.jpg",
        features: [
          "Minimalist design",
          "Slim profile",
          "Metal legs",
          "Modular options",
        ],
        dimensions: "240cm x 85cm x 75cm",
        materials: ["Premium Leather", "Metal Frame", "Memory Foam"],
        colors: ["Black", "White", "Tan", "Navy Blue"],
        availability: "Made to Order",
        delivery: "6-8 weeks",
      },
      {
        id: 3,
        name: "Classic Chesterfield",
        price: "₹120,000",
        description:
          "Timeless Chesterfield design with button-tufted back and rolled arms for a luxurious statement.",
        image: "/images/sofas/IMG_20250303_195129.jpg",
        features: [
          "Button-tufted design",
          "Rolled arms",
          "Deep seats",
          "Traditional craftsmanship",
        ],
        dimensions: "230cm x 95cm x 80cm",
        materials: ["Genuine Leather", "Hardwood Frame", "Spring System"],
        colors: ["Brown", "Burgundy", "Dark Green", "Black"],
        availability: "In Stock",
        delivery: "4-5 weeks",
      },
    ],
  },
  corner: {
    title: "Corner Sofas",
    description:
      "L-shaped sofas that maximize seating space and fit perfectly into corners of your living room.",
    products: [
      {
        id: 1,
        name: "Luxe Corner Sectional",
        price: "₹150,000",
        description:
          "Spacious L-shaped corner sofa with modular design for flexible arrangements.",
        image: "/images/sofas/IMG_20250303_195536.jpg",
        features: [
          "L-shaped design",
          "Modular configuration",
          "Extra deep seats",
          "Hidden storage",
        ],
        dimensions: "320cm x 260cm x 85cm",
        materials: [
          "Premium Fabric",
          "Engineered Wood",
          "High-resilience Foam",
        ],
        colors: ["Light Grey", "Dark Grey", "Beige", "Blue"],
        availability: "Made to Order",
        delivery: "8-10 weeks",
      },
      {
        id: 2,
        name: "Compact Corner Sofa",
        price: "₹125,000",
        description:
          "Space-saving corner sofa ideal for smaller living rooms without compromising on comfort.",
        image: "/images/sofas/IMG_20250303_195608.jpg",
        features: [
          "Space-saving design",
          "Reversible chaise",
          "Pocket springs",
          "Removable covers",
        ],
        dimensions: "260cm x 200cm x 85cm",
        materials: ["Stain-resistant Fabric", "Solid Wood", "Pocket Springs"],
        colors: ["Light Grey", "Navy Blue", "Sage Green", "Mustard Yellow"],
        availability: "In Stock",
        delivery: "4-6 weeks",
      },
    ],
  },
  curved: {
    title: "Curved Sofas",
    description:
      "Elegant and stylish curved sofas that make a statement in contemporary living spaces.",
    products: [
      {
        id: 1,
        name: "Arte Curved Sofa",
        price: "₹140,000",
        description:
          "Sculptural curved sofa with flowing lines that serves as a stunning centerpiece.",
        image: "/images/sofas/IMG_20250303_195129.jpg",
        features: [
          "Sculptural design",
          "Continuous curve",
          "Feather-filled cushions",
          "Custom upholstery options",
        ],
        dimensions: "260cm x 100cm x 85cm",
        materials: [
          "Designer Fabric",
          "Kiln-dried Hardwood",
          "Feather-filled Cushions",
        ],
        colors: ["Cream", "Blush Pink", "Sage Green", "Navy Blue"],
        availability: "Made to Order",
        delivery: "10-12 weeks",
      },
    ],
  },
  "u-shaped": {
    title: "U-Shaped Sofas",
    description:
      "Spacious and comfortable U-shaped sofas perfect for large families and entertainment areas.",
    products: [
      {
        id: 1,
        name: "Grand U-Shape Sectional",
        price: "₹220,000",
        description:
          "Expansive U-shaped sofa designed for large living rooms and entertainment spaces.",
        image: "/images/sofas/IMG_20250303_195036.jpg",
        features: [
          "U-shaped design",
          "Extra wide seats",
          "Oversized ottoman available",
          "Built-in storage",
        ],
        dimensions: "380cm x 280cm x 85cm",
        materials: [
          "Performance Fabric",
          "Hardwood Frame",
          "High-density Foam",
        ],
        colors: ["Beige", "Light Grey", "Dark Grey", "Blue"],
        availability: "Made to Order",
        delivery: "12-14 weeks",
      },
    ],
  },
  recliner: {
    title: "Recliner Sofas",
    description:
      "Adjustable sofas with reclining functionality for ultimate comfort and relaxation.",
    products: [
      {
        id: 1,
        name: "Luxury Electric Recliner",
        price: "₹160,000",
        description:
          "Premium electric reclining sofa with adjustable headrests and lumbar support.",
        image: "/images/sofas/IMG_20250303_195608.jpg",
        features: [
          "Electric recline",
          "Adjustable headrests",
          "Lumbar support",
          "USB charging",
        ],
        dimensions: "220cm x 95cm x 105cm",
        materials: ["Premium Leather", "Metal Frame", "Memory Foam"],
        colors: ["Black", "Brown", "Tan", "Grey"],
        availability: "In Stock",
        delivery: "4-6 weeks",
      },
    ],
  },
  "sofa-cum-bed": {
    title: "Sofa Cum Bed",
    description:
      "Versatile sofas that convert into beds, perfect for guest rooms and small spaces.",
    products: [
      {
        id: 1,
        name: "Convertible Sleeper Sofa",
        price: "₹110,000",
        description:
          "Stylish sofa that easily transforms into a comfortable queen-sized bed.",
        image: "/images/sofas/IMG_20250303_195623.jpg",
        features: [
          "Easy conversion mechanism",
          "Comfortable mattress",
          "Storage for bedding",
          "Removable covers",
        ],
        dimensions: "230cm x 90cm x 85cm (Sofa) / 230cm x 150cm (Bed)",
        materials: [
          "Premium Fabric",
          "Engineered Wood",
          "Memory Foam Mattress",
        ],
        colors: ["Grey", "Navy Blue", "Beige", "Olive Green"],
        availability: "In Stock",
        delivery: "3-5 weeks",
      },
    ],
  },
};

export const sustainabilityGoals = [
  {
    year: "2025",
    title: "Carbon Neutral Operations",
    description:
      "Achieve carbon neutrality in all our manufacturing facilities through renewable energy sources and optimized processes.",
  },
  {
    year: "2026",
    title: "Zero Waste Production",
    description:
      "Implement a closed-loop manufacturing process that eliminates waste and maximizes resource efficiency.",
  },
  {
    year: "2027",
    title: "Eco-Friendly Materials",
    description:
      "Source 100% of our raw materials from sustainable suppliers and introduce fully recyclable product lines.",
  },
  {
    year: "2028",
    title: "Water Conservation",
    description:
      "Reduce water consumption in our production processes by 75% through innovative recirculation systems.",
  },
  {
    year: "2030",
    title: "Complete Sustainability",
    description:
      "Complete transition to sustainable materials, packaging, and delivery processes throughout our entire supply chain.",
  },
];

export const visionPoints = [
  {
    title: "Design Innovation",
    description:
      "Leading the future of furniture design through innovative use of stainless steel and sustainable materials.",
    icon: "🎨",
  },
  {
    title: "Sustainability",
    description:
      "Committed to eco-friendly practices and sustainable manufacturing processes to protect our environment.",
    icon: "🌱",
  },
  {
    title: "Global Reach",
    description:
      "Expanding our presence worldwide while maintaining the highest standards of quality and craftsmanship.",
    icon: "🌍",
  },
  {
    title: "Customer Experience",
    description:
      "Creating seamless and personalized experiences for our customers across all touchpoints.",
    icon: "✨",
  },
];

export const futureGoals = [
  {
    year: "2025",
    goal: "100% Sustainable Production",
    description:
      "Achieve complete sustainability in our manufacturing processes and material sourcing.",
  },
  {
    year: "2027",
    goal: "Global Design Centers",
    description:
      "Establish design centers in major cities worldwide to showcase our innovation and craftsmanship.",
  },
  {
    year: "2030",
    goal: "Carbon Neutral",
    description:
      "Become a carbon-neutral company through innovative practices and green initiatives.",
  },
];
