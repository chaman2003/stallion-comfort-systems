"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";

const StraightSofasPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Sample product data for straight sofas
  const products = [
    {
      id: 1,
      name: "Milano Stainless Straight Sofa",
      image: "bg-gray-200",
      price: "₹85,000",
      description:
        "Contemporary straight sofa with premium stainless steel frame and high-density cushioning",
      features: [
        "Brushed stainless steel frame",
        "Premium leather upholstery",
        "High-resilience foam cushions",
      ],
      dimensions: "220cm × 90cm × 85cm",
      availability: "In Stock",
      colors: ["Camel Brown", "Ivory White", "Charcoal Gray", "Navy Blue"],
    },
    {
      id: 2,
      name: "Laszlo Industrial Sofa",
      image: "bg-gray-200",
      price: "₹92,000",
      description:
        "Industrial design straight sofa with bold stainless steel elements and durable fabric upholstery",
      features: [
        "304 grade stainless steel construction",
        "Performance fabric upholstery",
        "No-sag spring system",
      ],
      dimensions: "240cm × 95cm × 82cm",
      availability: "Made to Order",
      colors: ["Storm Gray", "Forest Green", "Desert Sand", "Slate Blue"],
    },
    {
      id: 3,
      name: "Vienna Minimalist Sofa",
      image: "bg-gray-200",
      price: "₹78,500",
      description:
        "Minimalist straight sofa with sleek lines and premium comfort features",
      features: [
        "Mirror-polished stainless steel base",
        "Premium Italian leather",
        "Ergonomic backrest design",
      ],
      dimensions: "210cm × 88cm × 80cm",
      availability: "In Stock",
      colors: ["Classic Black", "Pure White", "Cognac Brown", "Pearl Gray"],
    },
    {
      id: 4,
      name: "Oslo Modern Straight Sofa",
      image: "bg-gray-200",
      price: "₹105,000",
      description:
        "Modern Scandinavian-inspired straight sofa with stainless steel accents and plush cushioning",
      features: [
        "316 marine-grade stainless elements",
        "Down-filled back cushions",
        "Kiln-dried hardwood inner frame",
      ],
      dimensions: "230cm × 92cm × 86cm",
      availability: "Limited Stock",
      colors: ["Light Oak", "Misty Gray", "Sea Blue", "Blush Pink"],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link
                  href="/category"
                  className="text-gray-700 hover:text-gold"
                >
                  Categories
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link
                  href="/category/living-room"
                  className="text-gray-700 hover:text-gold"
                >
                  Living Room
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link
                  href="/category/living-room/sofas"
                  className="text-gray-700 hover:text-gold"
                >
                  Sofas
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gold">Straight Sofas</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">
          Straight Sofas Collection
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Our straight sofa collection combines contemporary design with premium
          stainless steel craftsmanship. These versatile pieces work well in
          both traditional and modern interiors, offering exceptional comfort
          and durability.
        </p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="block hover:no-underline"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{
                  y: hoveredProduct === index ? -8 : 0,
                  scale: hoveredProduct === index ? 1.02 : 1,
                  boxShadow:
                    hoveredProduct === index
                      ? "0 24px 45px -20px rgba(0,31,63,0.25)"
                      : "0 10px 25px -18px rgba(15,23,42,0.25)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row group cursor-pointer h-full"
              >
                {/* Product Image */}
                <div className="md:w-1/2 relative overflow-hidden">
                  <div
                    className={`w-full h-full aspect-[4/3] ${product.image} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                  >
                    <span className="text-xl text-gray-500">Product Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Handle favorite
                      }}
                    >
                      <Heart className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                      className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Handle share
                      }}
                    >
                      <Share2 className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 p-6 flex flex-col">
                  <h3 className="text-2xl font-medium mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <span className="text-gold text-xl font-medium mb-4">
                    {product.price}
                  </span>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {/* Product Features */}
                  <div className="mb-4 hidden group-hover:block">
                    <h4 className="font-medium text-lg mb-2 text-gray-900">
                      Features
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="text-gray-600">
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 2 && (
                        <li className="text-gray-600">...and more</li>
                      )}
                    </ul>
                  </div>

                  {/* Product Specifications - Show on non-hover */}
                  <div className="mb-4 group-hover:hidden">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium">Dimensions:</span>
                        <p className="text-gray-600">{product.dimensions}</p>
                      </div>
                      <div>
                        <span className="font-medium">Availability:</span>
                        <p
                          className={`${
                            product.availability === "In Stock"
                              ? "text-green-600"
                              : product.availability === "Out of Stock"
                                ? "text-red-600"
                                : "text-amber-600"
                          }`}
                        >
                          {product.availability}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Color Options */}
                  <div className="mb-6 group-hover:hidden">
                    <span className="font-medium">Available Colors:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.colors.slice(0, 3).map((color, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-sm rounded"
                        >
                          {color}
                        </span>
                      ))}
                      {product.colors.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-sm rounded">
                          +{product.colors.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="mt-auto">
                    <div className="inline-block text-gold hover:underline font-medium">
                      View Product Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline-block ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Filter & Sort Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-xl font-serif mb-6">
            Need Help Finding Your Perfect Sofa?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Guidance From Our Experts</h3>
              <p className="text-gray-600 mb-4">
                Our furniture specialists can help you find the perfect piece
                for your space. Schedule a consultation online or visit one of
                our showrooms.
              </p>
              <Link
                href="/contact"
                className="inline-block text-gold hover:underline font-medium"
              >
                Contact a Specialist
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
            <div>
              <h3 className="font-medium mb-3">Request Fabric Samples</h3>
              <p className="text-gray-600 mb-4">
                Not sure which upholstery to choose? Order fabric and leather
                samples to help make your decision. Available for all our
                products.
              </p>
              <Link
                href="/materials"
                className="inline-block text-gold hover:underline font-medium"
              >
                Order Samples
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StraightSofasPage;
