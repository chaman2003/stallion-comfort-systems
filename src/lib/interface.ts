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
