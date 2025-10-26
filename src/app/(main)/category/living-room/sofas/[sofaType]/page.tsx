"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { sofaData } from "@/lib/data";
import { useParams } from "next/navigation";

const SofaTypeLayout = () => {
  const params = useParams<{ sofaType: string }>();
  const sofaTypeKey = params?.sofaType as keyof typeof sofaData | undefined;
  const data = sofaData[sofaTypeKey ?? "straight"]; // fallback to straight collection

  if (!data) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif mb-4">Collection Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, this sofa collection doesn&apos;t exist.
          </p>
          <Link href="/category/living-room/sofas" className="text-yellow-600 hover:underline">
            Back to All Sofas
          </Link>
        </div>
      </div>
    );
  }

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
              <Link href="/category/living-room/sofas" className="hover:text-yellow-600 transition-colors">
                Sofas
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
              <span className="text-yellow-600">{data.title}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Page Header */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">{data.title}</h1>
        <p className="text-gray-700 max-w-3xl text-lg">{data.description}</p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {data.products.map((product, index) => (
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

                {/* Quick Specs */}
                <div className="mb-4 space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Dimensions:</span>{" "}
                    <span className="text-gray-600">{product.dimensions}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Materials:</span>{" "}
                    <span className="text-gray-600">{product.materials.join(", ")}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Available Colors:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.colors.slice(0, 3).map((color) => (
                        <span key={color} className="inline-block px-2 py-1 bg-gray-100 text-xs rounded">
                          {color}
                        </span>
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-gray-500">+{product.colors.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      product.availability === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : product.availability === "Out of Stock"
                          ? "bg-red-100 text-red-700"
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
          <h2 className="text-3xl font-serif mb-4">Need Help Choosing?</h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Our furniture specialists can help you find the perfect {data.title.toLowerCase()} for your space.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
          >
            Contact a Specialist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SofaTypeLayout;
