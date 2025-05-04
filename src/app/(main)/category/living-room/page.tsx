"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LivingRoomCategory = () => {
  // Living room subcategories
  const subcategories = [
    {
      name: "Sofas",
      image: "bg-gray-200",
      slug: "sofas",
      description: "Premium stainless steel sofas for ultimate comfort and elegance"
    },
    {
      name: "Pouffe",
      image: "bg-gray-200",
      slug: "pouffe",
      description: "Stylish pouffes to complement your living space"
    },
    {
      name: "Coffee Tables",
      image: "bg-gray-200",
      slug: "coffee-table",
      description: "Elegant coffee tables for your living room"
    },
    {
      name: "Console Tables",
      image: "bg-gray-200",
      slug: "console-table",
      description: "Premium console tables with stainless steel construction"
    },
    {
      name: "Corner Tables",
      image: "bg-gray-200",
      slug: "corner-table",
      description: "Space-saving corner tables for enhanced functionality"
    }
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
                <Link href="/category" className="text-gray-700 hover:text-gold">
                  Categories
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gold">Living Room</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Living Room Collection</h1>
        <p className="text-gray-600 max-w-3xl">
          Discover our premium living room furniture, featuring stainless steel craftsmanship combined with comfort and style.
          Transform your living spaces with our innovative designs that blend durability with elegance.
        </p>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 mb-16">
        <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-xl text-gray-500">Featured Living Room Collection Image</span>
        </div>
      </div>

      {/* Subcategories Grid */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-serif mb-8">Browse Living Room Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategories.map((subcategory, index) => (
            <motion.div
              key={subcategory.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/category/living-room/${subcategory.slug}`} className="block">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <div className={`h-48 ${subcategory.image} flex items-center justify-center`}>
                    <span className="text-xl text-gray-500">Image Placeholder</span>
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                      {subcategory.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{subcategory.description}</p>
                    <div className="flex items-center text-gold text-sm">
                      <span>View Collection</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
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

      {/* Design Philosophy Section */}
      <div className="container mx-auto px-4 mb-16 bg-gray-50 py-12 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center">Our Living Room Design Philosophy</h2>
          <p className="text-gray-600 mb-8 text-center">
            At Stallion Stainless, our living room furniture seamlessly blends innovative design with timeless 
            craftsmanship. Each piece is meticulously crafted using premium stainless steel for durability without 
            compromising on comfort and aesthetics.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-gold/10 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Innovative Design</h3>
              <p className="text-sm text-gray-600">Combining modern aesthetics with practical functionality</p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gold/10 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600">304 grade stainless steel with precision welding and polishing</p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gold/10 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Customizable</h3>
              <p className="text-sm text-gray-600">Tailor-made options to match your exact requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingRoomCategory;