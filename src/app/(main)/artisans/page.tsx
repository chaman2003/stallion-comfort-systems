import React from "react";
import Link from "next/link";
import { artisans } from "@/lib/data";

const Artisans = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Our Artisans</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Meet Our Artisans
        </h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-700 mb-8">
            Behind every piece of our furniture stands a team of dedicated
            craftspeople, each bringing years of expertise and passion to their
            work. Meet the masters who bring our designs to life.
          </p>
        </div>
      </div>

      {/* Artisans Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {artisans.map((artisan, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="md:w-1/3">
                <div className="relative pb-[100%] overflow-hidden rounded-lg">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-2">{artisan.name}</h3>
                <div className="text-gold mb-2">{artisan.role}</div>
                <div className="text-gray-600 mb-4">
                  Specialty: {artisan.specialty}
                </div>
                <p className="text-gray-700">{artisan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8">Our Workshop</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-6">
              Our state-of-the-art workshop combines traditional craftsmanship
              with modern technology. Each piece of furniture is meticulously
              crafted by our team of skilled artisans, ensuring the highest
              quality and attention to detail.
            </p>
            <button className="px-6 py-3 bg-gold text-white rounded hover:bg-gold/90 transition-colors">
              Schedule a Workshop Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artisans;
