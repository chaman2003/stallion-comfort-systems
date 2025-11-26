import React from "react";
import Link from "next/link";
import { showrooms } from "@/lib/data";

const Showrooms = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Showrooms</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Showrooms</h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-700 mb-8">
            Visit our showrooms to experience the quality and craftsmanship of
            our furniture firsthand. Our expert staff is ready to help you
            create your perfect space.
          </p>
        </div>
      </div>

      {/* Showrooms Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16">
          {showrooms.map((showroom, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative pb-[75%] lg:pb-[100%]">
                    <img
                      src={showroom.image}
                      alt={showroom.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="lg:w-1/2 p-8">
                  <h2 className="text-3xl font-serif mb-4">{showroom.name}</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>{showroom.address}</p>
                    <p>Phone: {showroom.phone}</p>
                    <p>Email: {showroom.email}</p>
                    <p className="font-medium">Hours:</p>
                    <p>{showroom.hours}</p>
                    <div className="pt-4">
                      <p className="font-medium mb-2">Features:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {showroom.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6">
                      <button className="px-6 py-2 bg-gold text-white rounded hover:bg-gold/90 transition-colors">
                        Schedule a Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Virtual Tour CTA */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif mb-4">Take a Virtual Tour</h3>
          <p className="text-gray-600 mb-6">
            Can&apos;t visit in person? Experience our showrooms through our
            immersive virtual tours.
          </p>
          <button className="px-8 py-3 bg-gold text-white rounded-md hover:bg-gold/90 transition-colors">
            Start Virtual Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showrooms;
