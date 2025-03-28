export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  gridArea: string;
  category?: string;
}

export interface CollectionImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
  price?: string;
  description?: string;
}

export interface CollectionSection {
  title: string;
  subtitle?: string;
  description?: string;
  items: string[];
  delay: number;
  image?: string;
}

export interface FeaturedProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  link: string;
}

export interface Product {
  _id?: string;
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  sofaType?: string;
  image: string;
  dimensions?: string;
  material?: string;
  color?: string;
}

export interface ChatResponse {
  _id?: string;
  id?: string;
  question: string;
  answer: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export interface SofaProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
  dimensions: string;
  materials: string[];
  colors: string[];
  availability: "In Stock" | "Made to Order" | "Out of Stock";
  delivery: string;
}

export type SofaTypeKey =
  | "straight"
  | "corner"
  | "curved"
  | "u-shaped"
  | "recliner"
  | "sofa-cum-bed";
