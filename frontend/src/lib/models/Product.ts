import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
  sofaType?: string;
  features?: string[];
  dimensions?: string;
  material?: string;
  color?: string;
  materials?: string[];
  colors?: string[];
  availability?: string;
  delivery?: string;
  isFeatured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    image: {
      type: String,
      required: [true, "Please provide an image URL"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
      index: true,
    },
    subcategory: {
      type: String,
      index: true,
    },
    sofaType: {
      type: String,
      index: true,
    },
    features: {
      type: [String],
      default: [],
    },
    dimensions: {
      type: String,
    },
    material: {
      type: String,
    },
    color: {
      type: String,
    },
    materials: {
      type: [String],
      default: [],
    },
    colors: {
      type: [String],
      default: [],
    },
    availability: {
      type: String,
      default: "In Stock",
    },
    delivery: {
      type: String,
      default: "3-4 weeks",
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create text index for search
ProductSchema.index({ name: "text", description: "text", category: "text" });

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
