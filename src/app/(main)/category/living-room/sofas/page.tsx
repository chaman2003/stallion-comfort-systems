"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SofasPage = () => {
  // Sofa types
  const sofaTypes = [
    {
      name: "Straight Sofas",
      image: "bg-gray-200",
      slug: "straight",
      description: "Classic straight sofas with stainless steel frame and premium upholstery"
    },
    {
      name: "Corner Sofas",
      image: "bg-gray-200",
      slug: "corner",
      description: "Space-efficient corner sofas for maximizing seating capacity"
    },
    {
      name: "Curved Sofas",
      image: "bg-gray-200",
      slug: "curved",
      description: "Elegant curved designs for modern living spaces"
    },
    {
      name: "U-Shaped Sofas",
      image: "bg-gray-200",
      slug: "u-shaped",
      description: "Complete seating solutions for large living rooms"
    },
    {
      name: "Recliner Sofas",
      image: "bg-gray-200",
      slug: "recliner",
      description: "Premium recliners with stainless steel mechanisms for ultimate comfort"
    },
    {
      name: "Sofa Cum Bed",
      image: "bg-gray-200",
      slug: "sofa-cum-bed",
      description: "Versatile sofas that convert into comfortable beds"
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
                <Link href="/category/living-room" className="text-gray-700 hover:text-gold">
                  Living Room
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gold">Sofas</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Premium Sofa Collection</h1>
        <p className="text-gray-600 max-w-3xl">
          Our signature sofa collection features stainless steel frames combined with premium upholstery materials.
          Each sofa is designed for exceptional comfort, durability, and aesthetic appeal.
        </p>
      </div>

      {/* Featured Banner */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gray-100 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Stainless Steel Frame Technology</h2>
              <p className="text-gray-600 mb-6">
                Our proprietary stainless steel frame construction offers unmatched durability and visual lightness.
                Unlike conventional wood frames, our frames will never warp, crack, or lose structural integrity over time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                  <span className="text-gray-700">Superior weight distribution</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                  <span className="text-gray-700">Rust and corrosion resistant</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                  <span className="text-gray-700">Precision-engineered joints and supports</span>
                </li>
              </ul>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-xl text-gray-500">Sofa Technology Image</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sofa Types Grid */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-serif mb-8">Browse Sofa Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sofaTypes.map((sofaType, index) => (
            <motion.div
              key={sofaType.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/category/living-room/sofas/${sofaType.slug}`} className="block">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <div className={`h-48 ${sofaType.image} flex items-center justify-center`}>
                    <span className="text-xl text-gray-500">Image Placeholder</span>
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                      {sofaType.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{sofaType.description}</p>
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

      {/* Custom Sofa Design CTA */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-[#001F3F] text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Custom Sofa Design Service</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Can't find exactly what you're looking for? Our bespoke sofa design service allows you to 
            create the perfect sofa for your space. Work with our designers to select dimensions, materials, 
            and finishes.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-gold text-black font-medium rounded-md hover:bg-gold/90 transition-colors"
          >
            Inquire About Custom Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SofasPage;