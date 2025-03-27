import {
  CollectionImage,
  CollectionSection,
  FeaturedProduct,
  GalleryImage,
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
