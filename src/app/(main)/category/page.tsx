"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CategoryPage = () => {
  // Main categories available in the store
  const categories = [
    {
      name: "Living Room",
      image: "bg-gray-200",
      slug: "living-room",
      description: "Elegant furniture solutions for your living spaces"
    },
    {
      name: "Dining Room",
      image: "bg-gray-200",
      slug: "dining-room",
      description: "Premium dining collections for memorable meals"
    },
    {
      name: "Bedroom",
      image: "bg-gray-200",
      slug: "bedroom",
      description: "Luxurious bedroom furniture for peaceful rest"
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
                <span className="text-gray-800">Categories</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Product Categories</h1>
        <p className="text-gray-600 max-w-3xl">
          Explore our premium furniture collections made with the finest stainless steel craftsmanship.
          Each category features pieces that blend aesthetic appeal with uncompromising quality.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/category/${category.slug}`} className="block">
                <div className="overflow-hidden rounded-xl shadow-md">
                  <div className={`h-64 ${category.image} flex items-center justify-center`}>
                    <span className="text-xl text-gray-500">Image Placeholder</span>
                  </div>
                  <div className="bg-white p-6">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center text-gold">
                      <span>Explore Collection</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;