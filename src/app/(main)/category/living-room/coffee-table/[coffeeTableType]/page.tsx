"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const CoffeeTableSubcategoryPage = () => {
  const params = useParams<{ coffeeTableType: string }>();
  const tableType = params?.coffeeTableType ?? "signature";

  // Sample products for this subcategory
  const products = [
    {
      id: 1,
      name: `Premium ${tableType.replace("-", " ")} Coffee Table`,
      price: "₹45,000",
      description: "Crafted with precision stainless steel and premium glass top.",
      availability: "In Stock",
    },
    {
      id: 2,
      name: `Designer ${tableType.replace("-", " ")} Collection`,
      price: "₹62,000",
      description: "Modern design with sculptural stainless steel base.",
      availability: "Made to Order",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <Link href="/" className="hover:text-yellow-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
              <Link href="/category/living-room" className="hover:text-yellow-600 transition-colors">
                Living Room
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
              <Link href="/category/living-room/coffee-table" className="hover:text-yellow-600 transition-colors">
                Coffee Tables
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
              <span className="text-yellow-600 capitalize">{tableType.replace("-", " ")}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 capitalize">
          {tableType.replace("-", " ")} Coffee Tables
        </h1>
        <p className="text-gray-700 max-w-3xl text-lg">
          Explore our collection of premium {tableType.replace("-", " ").toLowerCase()} coffee tables, crafted with exquisite stainless steel details and finest materials.
        </p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-2">{product.name}</h3>
                <p className="text-yellow-600 text-xl font-semibold mb-3">{product.price}</p>
                <p className="text-gray-700 mb-4">{product.description}</p>

                {/* Availability Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      product.availability === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {product.availability}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/products/${product.id}`}
                  className="inline-block w-full text-center px-4 py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors font-medium"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4">
        <div className="bg-blue-900 rounded-lg p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-serif mb-4">Custom Coffee Tables</h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Looking for a custom design? Our specialists can create a bespoke coffee table tailored to your space.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
          >
            Request Custom Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTableSubcategoryPage;
