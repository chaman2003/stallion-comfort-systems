"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CoffeeTablesCategory = () => {
  // Coffee table subcategories
  const subcategories = [
    {
      name: "Round Tables",
      image: "bg-gray-200",
      slug: "round-table",
      description:
        "Elegant round coffee tables with premium stainless steel base",
    },
    {
      name: "Square Tables",
      image: "bg-gray-200",
      slug: "square-table",
      description: "Modern square coffee tables crafted with precision",
    },
    {
      name: "Rectangular Tables",
      image: "bg-gray-200",
      slug: "rectangular-table",
      description:
        "Sophisticated rectangular coffee tables for spacious living rooms",
    },
    {
      name: "Shaped Tables",
      image: "bg-gray-200",
      slug: "shaped-table",
      description: "Uniquely shaped coffee tables that make a statement",
    },
    {
      name: "Nesting Tables",
      image: "bg-gray-200",
      slug: "nesting-table",
      description: "Space-saving nesting tables for flexible arrangements",
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
                <span className="text-gold">Coffee Tables</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">
          Premium Coffee Tables
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Our coffee tables blend innovative stainless steel construction with
          premium materials like glass, marble, and wood. Each piece is designed
          to be both a functional centerpiece and a work of art.
        </p>
      </div>

      {/* Featured Banner */}
      <div className="container mx-auto px-4 mb-16">
        <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
          <span className="text-xl text-gray-500">
            Featured Coffee Table Collection Image
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h2 className="text-3xl font-serif mb-2">
              Architectural Coffee Tables
            </h2>
            <p className="mb-4 max-w-xl">
              Our signature collection featuring sculptural stainless steel
              bases and premium tops. Each piece is a statement of modern
              elegance.
            </p>
            <Link
              href="/category/living-room/coffee-table/shaped-table"
              className="bg-gold text-black px-6 py-2 inline-block hover:bg-gold/90 transition-colors"
            >
              Discover Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Subcategories Grid */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-serif mb-8">
          Browse Coffee Table Styles
        </h2>
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
              <Link
                href={`/category/living-room/coffee-table/${subcategory.slug}`}
                className="block"
              >
                <div className="overflow-hidden rounded-lg shadow-md">
                  <div
                    className={`h-48 ${subcategory.image} flex items-center justify-center`}
                  >
                    <span className="text-xl text-gray-500">
                      Image Placeholder
                    </span>
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                      {subcategory.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {subcategory.description}
                    </p>
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

      {/* Materials Section */}
      <div className="container mx-auto px-4 mb-16 bg-gray-50 py-12 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center">
            Premium Materials
          </h2>
          <p className="text-gray-600 mb-10 text-center">
            Our coffee tables feature only the finest materials, selected for
            both beauty and longevity.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-gold/10 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Polished Stainless Steel</h3>
              <p className="text-sm text-gray-600">
                304 and 316 grade stainless steel with mirror or brushed
                finishes
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gold/10 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Premium Surfaces</h3>
              <p className="text-sm text-gray-600">
                Italian marble, tempered glass, and solid hardwood tops
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full bg-gold/10 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Precision Engineering</h3>
              <p className="text-sm text-gray-600">
                Meticulously crafted joints and connections for lasting
                durability
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Care Guide CTA */}
      <div className="container mx-auto px-4">
        <div className="border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-xl font-serif mb-2">Coffee Table Care Guide</h2>
            <p className="text-gray-600">
              Learn how to maintain the beauty of your stainless steel coffee
              table for decades to come. Our comprehensive care guide covers
              cleaning, protection, and maintenance tips.
            </p>
          </div>
          <Link
            href="/materials"
            className="bg-gold text-black px-6 py-3 inline-block hover:bg-gold/90 transition-colors"
          >
            Download Care Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTablesCategory;
